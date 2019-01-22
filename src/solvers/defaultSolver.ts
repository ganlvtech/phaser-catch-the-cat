import MainScene from "../scenes/mainScene";

export default function defaultSolver(blocksIsWall: boolean[][], i: number, j: number): number {
    let neighbours = MainScene.getNeighbours(i, j);
    return neighbours.findIndex(neighbour => {
        return (blocksIsWall[neighbour.i] !== undefined
            && blocksIsWall[neighbour.i][neighbour.j] !== undefined
            && !blocksIsWall[neighbour.i][neighbour.j]);
    });
}
