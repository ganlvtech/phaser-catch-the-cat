import MainScene from "../scenes/mainScene";

export default class Block extends Phaser.GameObjects.Arc {
    public readonly i: number;
    public readonly j: number;
    public readonly r: number;
    protected scene: MainScene;

    constructor(scene: MainScene, i: number, j: number, r: number) {
        let position = scene.getPosition(i, j);
        super(scene, position.x, position.y, r, 0, 360, false, 0, 1);
        this.i = i;
        this.j = j;
        this.r = r;
        this.isWall = false;

        let shape = new Phaser.Geom.Circle(this.r / 2, this.r / 2, this.r);
        this.setInteractive(shape, Phaser.Geom.Circle.Contains);
        this.on("pointerdown", () => {
            this.emit("player_click", this.i, this.j);
        });
    }

    private _isWall: boolean;

    get isWall(): boolean {
        return this._isWall;
    }

    set isWall(value: boolean) {
        this._isWall = value;
        if (value) {
            this.fillColor = 0x003366;
        } else {
            this.fillColor = 0xb3d9ff;
        }
    }
}
