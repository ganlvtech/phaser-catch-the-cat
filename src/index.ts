/// <reference path="./phaser.d.ts"/>

import "phaser";
import CatchTheCatGame from "./game";

window.addEventListener("load", () => {
    let game = new CatchTheCatGame(11, 11, 20);
    window["game"] = game;
});
