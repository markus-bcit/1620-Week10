let input;
do {
  prompt("what is you name?");
} while (!isNaN(Number(input)));

let fruits = ["Apple", "Banana"];
let pushResult = fruits.push("Orange");
console.log(popResult);

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  hobbies: ["music", "skiing"],
};
console.log(person.name[1]);