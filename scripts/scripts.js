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

console.log(`My name is ${person.name[0]}) ${person.name[1]}`)

for (let key in person)
{
    console.log(key);
    console.log(person[key]);
}

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3];


// for (let i = 0; students.GPA > 3; i++) {
//     console.log(student[i])
// }
let counter = 0;
for (let student of students )
{
    if (student.program === "CIT" && student.GPA > 3)
    {
        console.log(student.ID);
    }
}
console.log(counter)

