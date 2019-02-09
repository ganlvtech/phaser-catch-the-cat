import MainScene from "../scenes/mainScene";

export default class StatusBar extends Phaser.GameObjects.Text {
    constructor(scene: MainScene) {
        super(scene, 0, 0, "", {});
        this.setColor("#000000");
        let r = scene.r;
        this.setFontSize(r);
        this.setPadding(r, r, r, r);
    }
}

