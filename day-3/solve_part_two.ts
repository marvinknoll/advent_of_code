import * as fs from "fs";
const input: string = fs.readFileSync("input.txt", "utf8");

let priorities_sum = 0;

const isUppercase = (letter: string) => {
  return letter === letter.toUpperCase();
};

const inputArray = input.trim().split(/\n/g);

for (let i = 0; i < inputArray.length; i += 3) {
  const firstElf = inputArray[i];
  const secondElf = inputArray[i + 1];
  const thirdElf = inputArray[i + 2];

  let badge = "";
  Array.from(firstElf).forEach((char) => {
    if (secondElf.includes(char) && thirdElf.includes(char)) {
      badge = char;
    }
  });

  let priority = 0;
  if (isUppercase(badge)) {
    priority = badge.charCodeAt(0) - 38;
  } else {
    priority = badge.charCodeAt(0) - 96;
  }
  priorities_sum += priority;
}

console.log(priorities_sum);
