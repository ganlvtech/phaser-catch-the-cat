import MainScene from "../scenes/mainScene";

export default function randomSolver(blocksIsWall: boolean[][], i: number, j: number): number {
    let neighbours = MainScene.getNeighbours(i, j);
    let directions = [];
    neighbours.forEach((neighbour, direction) => {
        if (blocksIsWall[neighbour.i] !== undefined
            && blocksIsWall[neighbour.i][neighbour.j] !== undefined
            && !blocksIsWall[neighbour.i][neighbour.j]) {
            directions.push(direction);
        }
    });
    return directions[Math.floor(directions.length * Math.random())];
}
