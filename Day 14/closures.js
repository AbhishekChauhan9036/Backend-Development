// CLOSURE  ---
// //life-cycle of function

// function myFunc() {
//     const a = 23
//     const b = 56
//     const sum = a + b
//     const name = "sachin"
//     const city = "Dhanbad"
//     console.log(name, city)

//     function innerFunc() {

//         return {a:a, b:b, sum:sum, name:name, city: city}
//     }

//     return innerFunc  //innerFunc()
// }

// //  i want a b should not die after function execution

// const result = myFunc()

// console.log(result())

// Define the closure
function multFn() {
  const mult = 9;

  function innerFunc(val) {
    let result = mult * val;
    return result;
  }

  return innerFunc;
}

// Use the closure
const newCall = multFn();
console.log(newCall(18));
