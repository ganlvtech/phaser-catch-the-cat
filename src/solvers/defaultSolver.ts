import MainScene from "../scenes/mainScene";

export default function defaultSolver(blocksIsWall: boolean[][], i: number, j: number): number {
    let result = -1;
    let neighbours = MainScene.getNeighbours(i, j);
    neighbours.forEach((neighbour, direction) => {
        if (result === -1) {
            if (blocksIsWall[neighbour.i] !== undefined
                && blocksIsWall[neighbour.i][neighbour.j] !== undefined
                && !blocksIsWall[neighbour.i][neighbour.j]) {
                result = direction;
            }
        }
    });
    return result;
}
