import MainScene from "../scenes/mainScene";

export default class StatusBar extends Phaser.GameObjects.Text {
    constructor(scene: MainScene) {
        super(scene, 0, 0, "", {
            fontSize: "20px",
            fill: "#000000",
        });
        this.setPadding(16, 16, 16, 16);
    }
}

