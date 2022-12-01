import * as fs from "fs";
const input: string[] = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split(/\n/g);

let sums: number[] = [0];
input.map((cur) => {
  if (cur === "") {
    sums.push(0);
  } else {
    sums[sums.length - 1] += parseInt(cur);
  }
});

sums
  .sort((a, b) => {
    return a - b;
  })
  .reverse();

let total_sum = 0;
for (let i = 0; i < 3; i++) {
  total_sum += sums[i];
}

console.log(total_sum);
