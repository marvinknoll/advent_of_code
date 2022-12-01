import * as fs from "fs";
const input: string = fs.readFileSync("input.txt", "utf8");

let max_sum: number = 0;
let cur_sum: number = 0;

input
  .trim()
  .split(/\n/g)
  .map((cur) => {
    if (cur === "") {
      if (cur_sum > max_sum) {
        max_sum = cur_sum;
      }
      cur_sum = 0;
    } else {
      cur_sum += parseInt(cur);
    }
  });

console.log(max_sum);
