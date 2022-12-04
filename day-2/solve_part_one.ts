import * as fs from "fs";
const input: string = fs.readFileSync("input.txt", "utf8");

let score: number = 0;

const shape_values = new Map([
  ["X", 1],
  ["Y", 2],
  ["Z", 3],
]);

input
  .trim()
  .split(/\n/g)
  .map((line) => {
    const choices: string[] = line.split(" ");
    const opponent = choices[0];
    const player = choices[1];

    score += shape_values.get(player)!;

    if (player === "X" && opponent === "C") {
      score += 6;
    } else if (player === "Y" && opponent === "A") {
      score += 6;
    } else if (player === "Z" && opponent === "B") {
      score += 6;
    } else if (
      (player === "X" && opponent == "A") ||
      (player === "Y" && opponent == "B") ||
      (player === "Z" && opponent == "C")
    ) {
      score += 3;
    }
  });

console.log(score);
