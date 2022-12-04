import * as fs from "fs";
const input: string = fs.readFileSync("input.txt", "utf8");

let total_score: number = 0;

type opponentShape = "A" | "B" | "C";
type playerShape = "X" | "Y" | "Z";

const shape_mapper: Record<opponentShape, Record<playerShape, playerShape>> = {
  A: {
    X: "Z",
    Y: "X",
    Z: "Y",
  },
  B: {
    X: "X",
    Y: "Y",
    Z: "Z",
  },
  C: {
    X: "Y",
    Y: "Z",
    Z: "X",
  },
};

const shape_score_mapper: Record<playerShape, number> = {
  X: 1,
  Y: 2,
  Z: 3,
};

const outcome_mapper: Record<playerShape, number> = {
  X: 0,
  Y: 3,
  Z: 6,
};

input
  .trim()
  .split(/\n/g)
  .map((line) => {
    const [opponent, goal_outcome] = line.split(" ") as [
      opponentShape,
      playerShape
    ];

    const player_response = shape_mapper[opponent][goal_outcome];
    total_score +=
      shape_score_mapper[player_response] + outcome_mapper[goal_outcome];
  });

console.log(total_score);
