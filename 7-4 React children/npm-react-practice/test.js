//student obj
const student = { name: "sujon", lastName: "hasan", age: 23 };
console.log(student.name, student.lastName, student.age);

//object destruction
const { name, lastName, age } = student;

console.log(student);
