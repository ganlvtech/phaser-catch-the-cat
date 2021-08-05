import MainScene from "../scenes/mainScene";
import _ from "../i18n";

export default class UndoButton extends Phaser.GameObjects.Text {
    constructor(scene: MainScene) {
        super(scene, 0, 0, _("回退"), {});
        this.setColor("#000000");
        let r = scene.r;
        this.setFontSize(r);
        this.setPadding(r, r, r, r);
        this.setPosition(scene.game.canvas.width / 3, scene.game.canvas.height);
        this.setOrigin(0, 1);
        let shape = new Phaser.Geom.Rectangle(0, 0, this.width, this.height);
        this.setInteractive(shape, Phaser.Geom.Rectangle.Contains);
    }
}

