// In Pass by value, parameters passed as an arguments create its own copy. So any changes made inside the function is made to the copied value not to the original value .

// let a = 10  // created a variable a = 10

// let b = a  // created a variable b = 10  // value of a

// const c = {
//     abc : 12,
// }   // created an object c = { abc: 12}

// const d = c  // creat a variable d = address/reference of c

// c.abc = 90

// console.log(c, d)

// function Passbyvalue(i, j) {  // it created  i  = 1, j = 2  it created a copy of own

//    i = 0
//     j=6

//     console.log('inside function', a, b)
// }

// let a = 1;
// let b = 2;

// console.log(`Before calling Pass by value
// 		Function -> a = ${a} b = ${b}`);

// Passbyvalue(a, b);

// console.log(`After calling Pass by value
// 	Function -> a =${a} b = ${b}`);

//pass by reference

function PassbyReference(abc) {
  // by itself it creates a new variable :-- abc = reference of obj

  abc.a = "new";
  abc.b = "new2";

  console.log("inside func", abc);
}

let obj = {
  a: 10,
  b: 20,
};

console.log(`Before calling Pass By Reference
	Function -> a = ${obj.a} b = ${obj.b}`);

PassbyReference(obj);

console.log(`After calling Pass By Reference
	Function -> a = ${obj.a} b = ${obj.b}`);
