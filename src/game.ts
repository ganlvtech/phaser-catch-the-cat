import MainScene from "./scenes/mainScene";

/*!
 * Catch The Cat Game
 *
 * https://github.com/ganlvtech/phaser-catch-the-cat
 */
export default class CatchTheCatGame extends Phaser.Game {
    public readonly mainScene: MainScene;

    constructor(w: number, h: number, r: number, parent?: HTMLElement | string) {
        r = r * window.devicePixelRatio;
        let scene = new MainScene(w, h, r);
        const config: GameConfig = {
            width: Math.floor((6.5 + 2 * w) * r),
            height: Math.floor((6 + Math.sqrt(3) * h) * r),
            type: Phaser.AUTO,
            parent: parent,
            backgroundColor: 0xeeeeee,
            scene: scene,
            zoom: 1 / window.devicePixelRatio,
        };
        super(config);
        this.mainScene = scene;
    }

    private _solver;

    get solver() {
        return this._solver;
    }

    set solver(value) {
        this._solver = value;
        try {
            this.mainScene.cat.solver = value;
        } finally {
        }
    }
}
