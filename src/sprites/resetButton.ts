import * as Phaser from 'phaser';
import MainScene from "../scenes/mainScene";

export default class ResetButton extends Phaser.GameObjects.Text {
    constructor(scene: MainScene) {
        super(scene, 0, 0, "重置", {});
        this.setFontSize(20);
        this.setColor("#000000");
        this.setBackgroundColor("#dddddd");
        this.setPadding(16, 16, 16, 16);
        this.setPosition(0, scene.game.canvas.height - this.height);
        let shape = new Phaser.Geom.Rectangle(0, 0, this.width, this.height);
        this.setInteractive(shape, Phaser.Geom.Rectangle.Contains);
    }
}

