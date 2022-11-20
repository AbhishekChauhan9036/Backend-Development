/*THINK OVER:........................................................................................*/
// 1. var abc= 10
// console.log( abc++   +    abc  ) // 21
let num1=40
let num2=30
console.log(++num1+num2++)// output is  71 




//  2. read SPLICE and SLICE...........................................................................
const arr = ["Ram", "Shyam", "Rohan", "Sohan"];
arr.splice(2, 0, "Mohan", "Vishal");
console.log(arr)//Output is  [ 'Ram', 'Shyam', 'Mohan', 'Vishal', 'Rohan', 'Sohan' ]


const arr2 = ["Ram", "Shyam", "Rohan", "Sohan"];
const ans = arr2.slice(1,3);
console.log(ans)//Output is [ 'Shyam', 'Rohan' ]
console.log(arr2)//Output is [ 'Ram', 'Shyam', 'Rohan', 'Sohan' ]




//  3. find how to sort an array of numbers NUMERICALLY................................................
let numbers = [70, 19 , 2, 3, 33, 200, 30 ];
numbers.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);