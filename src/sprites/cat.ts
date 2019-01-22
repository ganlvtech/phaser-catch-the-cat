import * as Phaser from 'phaser';
import MainScene from "../scenes/mainScene";
import data from "../data";
import Block from "./block";

export default class Cat extends Phaser.GameObjects.Sprite {
    protected scene: MainScene;

    constructor(scene: MainScene) {
        super(scene, 0, 0, data.catDefaultTexture);
        this.on('animationrepeat', () => {
            this.moveForward();
        });
        this.reset();
    }

    private _i: number;

    get i(): number {
        return this._i;
    }

    private _j: number;

    get j(): number {
        return this._j;
    }

    private _direction: number;

    get direction(): number {
        return this._direction;
    }

    set direction(direction: number) {
        this._direction = direction;
        this.resetTexture();
        let directionData = data.directions[this.direction];
        this.scaleX = directionData.scaleX;
        let origin = data.origins[directionData.name];
        this.setOrigin(origin.x, origin.y);
    }

    get state(): string {
        if (this.i === 0 || this.i === this.scene.w - 1 || this.j === 0 || this.j === this.scene.h - 1) {
            return 'lose';
        } else if (this.getAvailableDirections().length <= 0) {
            return 'win';
        }
        return 'playing';
    }

    reset() {
        this.setIJ(Math.floor(this.scene.w / 2), Math.floor(this.scene.h / 2));
        this.direction = data.catDefaultDirection;
        this.stop();
    }

    setIJ(i: number, j: number): this {
        this._i = i;
        this._j = j;
        let position = this.scene.getPosition(i, j);
        return this.setPosition(position.x, position.y);
    }

    stepDirection(direction: number): boolean {
        this.direction = direction;
        return this.stepForward();
    }

    runEscape() {
        if (this.j === 0 || this.j === this.scene.h - 1) {
            this.runForward();
        } else if (this.i === 0) {
            this.runDirection(0);
        } else if (this.i === this.scene.w - 1) {
            this.runDirection(3);
        }
    }

    cannotEscape() {
        this.setTexture(data.cannotEscapeTextures[data.directions[this.direction].name]);
    }

    getAvailableDirections(): number[] {
        let directions: number[] = [];
        this.getCurrentNeighbours().forEach((neighbour, direction: number) => {
            let block = this.scene.getBlock(neighbour.i, neighbour.j);
            if (block !== null && !block.isWall) {
                directions.push(direction);
            }
        });
        return directions;
    }

    private getCurrentNeighbours() {
        return MainScene.getNeighbours(this.i, this.j);
    }

    private getStepOneNeighbour(direction: number): Block | null {
        let neighbour = this.getCurrentNeighbours()[direction];
        return this.scene.getBlock(neighbour.i, neighbour.j);
    }

    /**
     * Reset texture to stop texture
     */
    private resetTexture() {
        this.setTexture(data.stopTextures[data.directions[this.direction].name]);
    }

    private stop(): void {
        this.anims.stop();
        this.resetTexture();
    }

    private moveForward() {
        let neighbour = this.getCurrentNeighbours()[this.direction];
        this.setIJ(neighbour.i, neighbour.j);
    }

    private stepForward(): boolean {
        let neighbour = this.getStepOneNeighbour(this.direction);
        if (neighbour === null) {
            return false;
        }
        if (neighbour.isWall) {
            return false;
        }
        this.play(data.directions[this.direction].name + '_step');
        this.once('animationcomplete', () => {
            this.stop();
            this.moveForward();
        });
        return true;
    }

    private runForward() {
        this.play(data.directions[this.direction].name + '_run');
    }

    private runDirection(direction: number) {
        this.direction = direction;
        this.runForward();
    }
}
