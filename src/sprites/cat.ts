import MainScene from "../scenes/mainScene";
import data from "../data";
import defaultSolver from "../solvers/defaultSolver";

declare type CatSolver = (blocksIsWall: boolean[][], i: number, j: number) => number;

export default class Cat extends Phaser.GameObjects.Sprite {
    protected scene: MainScene;

    constructor(scene: MainScene) {
        super(scene, 0, 0, "__DEFAULT");
        this.on("animationrepeat", () => {
            this.moveForward();
        });
        this.solver = defaultSolver;
        this.direction = data.catDefaultDirection;
        this.reset();
    }

    get i(): number {
        return this.getData("i");
    }

    set i(value: number) {
        this.setData("i", value);
    }

    get j(): number {
        return this.getData("j");
    }

    set j(value: number) {
        this.setData("j", value);
    }

    get direction(): number {
        return this.getData("direction");
    }

    set direction(value: number) {
        this.setData("direction", value);
        this.resetTextureToStop();
        this.resetOriginAndScale();
    }

    get solver(): CatSolver {
        return this.getData("solver");
    }

    set solver(value: CatSolver) {
        this.setData("solver", value);
    }

    reset() {
        this.anims.stop();
        this.direction = data.catDefaultDirection;
        this.resetIJ();
    }

    undo(i, j) {
        this.anims.stop();
        this.setIJ(i, j)
    }

    step(): boolean {
        let direction = this.solver.call(this, this.scene.blocksData, this.i, this.j);
        if (direction < 0 || direction > 6) {
            this.caught();
            return false;
        }
        let result = this.stepDirection(direction);
        if (!result) {
            this.caught();
            return false;
        }
        return true;
    }

    isCaught() {
        return !this.getCurrentNeighbours()
            .some((neighbour, direction: number) => {
                let block = this.scene.getBlock(neighbour.i, neighbour.j);
                return block !== null && !block.isWall;
            });
    }

    private caught() {
        this.setTexture(data.cannotEscapeTextures[data.directions[this.direction].name]);
    }

    private escape() {
        if (this.j === 0 || this.j === this.scene.h - 1) {
            this.runForward();
        } else if (this.i === 0) {
            this.runDirection(0);
        } else if (this.i === this.scene.w - 1) {
            this.runDirection(3);
        }
    }

    private setIJ(i: number, j: number): this {
        this.i = i;
        this.j = j;
        let position = this.scene.getPosition(i, j);
        return this.setPosition(position.x, position.y);
    }

    private resetIJ() {
        this.setIJ(Math.floor(this.scene.w / 2), Math.floor(this.scene.h / 2));
    }

    private isEscaped() {
        return this.i <= 0 || this.i >= this.scene.w - 1
            || this.j <= 0 || this.j >= this.scene.h - 1;
    }

    private checkState() {
        if (this.isEscaped()) {
            this.escape();
            this.emit("escaped");
        } else if (this.isCaught()) {
            this.caught();
            this.emit("win");
        }
    }

    private getCurrentNeighbours() {
        return MainScene.getNeighbours(this.i, this.j);
    }

    private resetTextureToStop() {
        this.setTexture(data.stopTextures[data.directions[this.direction].name]);
    }

    private resetOriginAndScale() {
        let directionData = data.directions[this.direction];
        let origin = data.origins[directionData.name];
        this.setOrigin(origin.x, origin.y);
        this.scaleX = directionData.scaleX;
    }

    private moveForward() {
        let neighbour = this.getCurrentNeighbours()[this.direction];
        this.setIJ(neighbour.i, neighbour.j);
        this.checkState();
    }

    private stepForward(): boolean {
        let neighbour = this.getCurrentNeighbours()[this.direction];
        let block = this.scene.getBlock(neighbour.i, neighbour.j);
        if (block === null) {
            return false;
        }
        if (block.isWall) {
            return false;
        }
        this.play(data.directions[this.direction].name + "_step");
        this.once("animationcomplete", () => {
            this.moveForward();
            this.resetTextureToStop();
        });
        return true;
    }

    private stepDirection(direction: number): boolean {
        this.direction = direction;
        return this.stepForward();
    }

    private runForward() {
        this.play(data.directions[this.direction].name + "_run");
    }

    private runDirection(direction: number) {
        this.direction = direction;
        this.runForward();
    }
}
