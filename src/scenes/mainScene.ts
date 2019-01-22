import * as Phaser from 'phaser';
import data from "../data";
import Cat from "../sprites/cat";
import Block from "../sprites/block";
import defaultSolver from "../solvers/defaultSolver";

export default class MainScene extends Phaser.Scene {
    public readonly w: number;
    public readonly h: number;
    public readonly r: number;
    public readonly dx: number;
    public readonly dy: number;

    constructor(w: number, h: number, r: number) {
        super({
            key: "MainScene"
        });
        this.w = w;
        this.h = h;
        this.r = r;
        this.dx = this.r * 2;
        this.dy = this.r * Math.sqrt(3);
        this.solver = defaultSolver;
    }

    private _blocks: Block[][];

    get blocks(): Block[][] {
        return this._blocks;
    }

    get blocksData(): boolean[][] {
        let result: boolean[][] = [];
        this.blocks.forEach((column, i) => {
            result[i] = [];
            column.forEach((block, j) => {
                result[i][j] = block.isWall;
            });
        });
        return result;
    }

    private _cat: Cat;

    get cat(): Cat {
        return this._cat;
    }

    private _statusBar: Phaser.GameObjects.Text;

    get statusBar(): Phaser.GameObjects.Text {
        return this._statusBar;
    }

    private _state: string;

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        switch (value) {
            case 'playing':
                this._state = value;
                break;
            case 'win':
                this._state = value;
                this.cat.cannotEscape();
                break;
            case 'lose':
                this._state = value;
                this.cat.runEscape();
                break;
        }
    }

    private _solver: (blocksIsWall: boolean[][], i: number, j: number) => number;

    set solver(value: (blocksIsWall: boolean[][], i: number, j: number) => number) {
        this._solver = value;
    }

    static getNeighbours(i: number, j: number): any[] {
        let left = {i: i - 1, j: j};
        let right = {i: i + 1, j: j};
        let top_left;
        let top_right;
        let bottom_left;
        let bottom_right;
        if ((j & 1) === 0) {
            top_left = {i: i - 1, j: j - 1};
            top_right = {i: i, j: j - 1};
            bottom_left = {i: i - 1, j: j + 1};
            bottom_right = {i: i, j: j + 1};
        } else {
            top_left = {i: i, j: j - 1};
            top_right = {i: i + 1, j: j - 1};
            bottom_left = {i: i, j: j + 1};
            bottom_right = {i: i + 1, j: j + 1};
        }
        let neighbours = [];
        neighbours[0] = left;
        neighbours[1] = top_left;
        neighbours[2] = top_right;
        neighbours[3] = right;
        neighbours[4] = bottom_right;
        neighbours[5] = bottom_left;
        return neighbours;
    }

    preload(): void {
        let textureScale = this.r / data.catStepLength;
        data.textures.forEach(path => {
            this.load.svg(path, path, {scale: textureScale});
        });
    }

    create(): void {
        this.createAnimations();
        this.createBlocks();
        this.createCat();
        this._statusBar = this.add.text(0, 0, '', {fontSize: '20px', fill: '#000'});
        this.statusBar.setPadding(16, 16, 16, 16);
        this.reset();
    }

    getPosition(i: number, j: number): { x: number; y: number } {
        return {
            x: this.r * 3 + ((j & 1) === 0 ? this.r : this.dx) + i * this.dx,
            y: this.r * 3 + this.r + j * this.dy
        };
    }

    getBlock(i: number, j: number): Block | null {
        if (!(i >= 0 && i < this.w && j >= 0 && j < this.h)) {
            return null;
        }
        return this.blocks[i][j];
    }

    playerClick(i: number, j: number): boolean {
        if (this.state !== 'playing') {
            this.setStatusText('游戏已经结束，重新开局');
            this.reset();
            return false;
        }
        if (this.cat.anims.isPlaying) {
            this.setStatusText('动画中暂时禁止点击');
            return false;
        }
        let block = this.getBlock(i, j);
        if (!block) {
            this.setStatusText(`代码错误，当前位置不存在`);
            return false;
        }
        if (block.isWall) {
            this.setStatusText(`当前位置已经是墙了，禁止点击`);
            return false;
        }
        if (this.cat.i === i && this.cat.j === j) {
            this.setStatusText(`当前位置是猫当前的位置，禁止点击`);
            return false;
        }
        block.isWall = true;
        let catState = this.cat.state;
        if (catState === 'lose') {
            this.setStatusText(`猫已经跑到地图边缘了，你输了`);
            this.state = catState;
            return false;
        } else if (catState === 'win') {
            this.setStatusText(`猫已经无路可走，你赢了`);
            this.state = catState;
            return false;
        }
        this.setStatusText(`您点击了 (${i}, ${j})`);
        let direction = this._solver(this.blocksData, this.cat.i, this.cat.j);
        if (direction < 0) {
            this.setStatusText('算法认输，你赢了！');
            this.state = 'win';
        } else {
            let result = this.cat.stepDirection(direction);
            if (!result) {
                this.setStatusText('算法错误（撞墙或者出界），你赢了！');
                this.state = 'win';
            }
        }
    }

    reset() {
        this.cat.reset();
        this.blocks.forEach(blocks => {
            blocks.forEach(block => {
                block.isWall = false;
            });
        });
        this.state = 'playing';
        this.setStatusText('点击小圆点，围住小猫');
    }

    private setStatusText(message: string) {
        this.statusBar.setText(message);
    }

    private createAnimations(): void {
        data.animations.forEach(animation => {
            let frames: AnimationFrameConfig[] = [];
            animation.textures.forEach(texture => {
                frames.push({
                    key: texture,
                    frame: 0
                });
            });
            this.anims.create({
                key: animation.name,
                frames: frames,
                frameRate: data.frameRate,
                repeat: animation.repeat
            });
        });
    }

    private createBlocks(): void {
        let blockSprites: Block[] = [];
        let blocks = [];
        for (let i = 0; i < this.w; i++) {
            blocks[i] = [];
            for (let j = 0; j < this.h; j++) {
                let block = new Block(this, i, j, this.r * 0.9);
                blocks[i][j] = block;
                this.add.existing(block);

                block.addListener('player_click', this.playerClick.bind(this));
            }
        }
        this._blocks = blocks;
    }

    private createCat(): void {
        let cat = new Cat(this);
        this._cat = cat;
        this.add.existing(cat);
    }
}
