/// <reference path="./phaser.d.ts"/>

import "phaser";
import CatchTheCatGame from "./game";
import randomSolver from "./solvers/randomSolver";

window.addEventListener("load", () => {
    let game = new CatchTheCatGame(11, 11, 20);
    game.mainScene.solver = randomSolver;

    window['game'] = game;
});
