import MainScene from "./scenes/mainScene";

export default class CatchTheCatGame extends Phaser.Game {
    public readonly mainScene: MainScene;

    constructor(w: number, h: number, r: number, parent?: HTMLElement | string) {
        let scene = new MainScene(w, h, r);
        const config: GameConfig = {
            width: Math.floor((6.5 + 2 * w) * r),
            height: Math.floor((6.5 + Math.sqrt(3) * h) * r),
            type: Phaser.AUTO,
            parent: parent,
            backgroundColor: 0xeeeeee,
            scene: scene,
        };
        super(config);
        this.mainScene = scene;
    }
}
