//spread operator
const person = { name : 'iqra' , age :20, isMarried : false,};
const person2={...person , salary: 700000};
console.log(person2)

//destructor
const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(b)