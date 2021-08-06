/// <reference path="./phaser.d.ts"/>

import CatchTheCatGame from "./game";

declare global {
    interface Window {
        CatchTheCatGame: typeof CatchTheCatGame;
		game: CatchTheCatGame;
    }
}

window.CatchTheCatGame = CatchTheCatGame;

window.game = new CatchTheCatGame({
	w: 11,
	h: 11,
	r: 20,
	backgroundColor: 0xffffff,
	parent: 'catch-the-cat',
	statusBarAlign: 'center',
	credit: 'github.com/ganlvtech'
});