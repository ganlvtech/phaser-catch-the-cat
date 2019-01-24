import * as Phaser from 'phaser';
import MainScene from "../scenes/mainScene";
import _ from "../i18n";

export default class ResetButton extends Phaser.GameObjects.Text {
    constructor(scene: MainScene) {
        super(scene, 0, 0, _("重置"), {});
        this.setFontSize(20);
        this.setColor("#000000");
        this.setPadding(16, 16, 16, 16);
        let y = (4 + Math.sqrt(3) * scene.h) * scene.r;
        this.setPosition(0, y);
        let shape = new Phaser.Geom.Rectangle(0, 0, this.width, this.height);
        this.setInteractive(shape, Phaser.Geom.Rectangle.Contains);
    }
}

