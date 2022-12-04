import * as fs from "fs";
const input: string = fs.readFileSync("input.txt", "utf8");

let priorities_sum = 0;

const isUppercase = (letter: string) => {
  return letter === letter.toUpperCase();
};

input
  .trim()
  .split(/\n/g)
  .map((line) => {
    const middle = Math.ceil(line.length / 2);
    const left = line.slice(0, middle);
    const right = line.slice(middle);

    let shared_item = "";
    Array.from(left).forEach((char) => {
      if (right.indexOf(char) > -1) {
        shared_item = char;
      }
    });

    let priority = 0;
    if (isUppercase(shared_item)) {
      priority = shared_item.charCodeAt(0) - 38;
    } else {
      priority = shared_item.charCodeAt(0) - 96;
    }
    priorities_sum += priority;
  });

console.log(priorities_sum);
