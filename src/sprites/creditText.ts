import MainScene from "../scenes/mainScene";

export default class CreditText extends Phaser.GameObjects.Text {
    constructor(scene: MainScene) {
        super(scene, 0, 0, "", {});
        this.setColor("#000000");
        this.setPosition(scene.game.canvas.width, scene.game.canvas.height);
        this.setOrigin(1, 1);
        let r = scene.r;
        this.setFontSize(r * 0.8);
        this.setPadding(r, r, r, r);
        this.setText(scene.game.myConfig.credit);
    }
}

