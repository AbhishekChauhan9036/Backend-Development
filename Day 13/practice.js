const arr = [1, 2, 3, 4];

// const result = arr.map(function(a){
//  return a* a
// })

// console.log(result)

//javascript inbuild array function ( these are higher order function)

//map  // create a new array with modified element/value
//forEach
//filter
//find
//reduce

// map
// why we need map?
// it creates a new array.

// const numbers = [1, 2, 3, 4, 5];

// const resultArray = numbers.map( (num) => num * 4 )

// const result = numbers.map((x) => x*2)  // here x is a parameter of function

// console.log(resultArray)

// //console.log(numbers)

const personList = [{ name: "sachin" }, { name: "pritesh" }];
// it doen't create a new array

//add location key in personList array, every element  = blr

//for access each element of an array

// in place of for loop we can use forEach
// no need of index in some case
// no need of break
// no need of index increament

// personList.forEach( (person, i) =>{
//     person.location = "BLR"
//     delete person.name
//     console.log(i)
// })

// console.log(personList)

//filter

//what is filter?

// there is condition in shieve/ chai chhanni. element should be smaller than net gap  // true

const numbers = [1, 2, 3, 4, 5]; // numbers[index] === 5

// const fileterArr = numbers.filter( (num) => num%2 != 0 ) //  we put net(condition)

// console.log(fileterArr)

const result = numbers.find((num) => num === 90); // it will return value if match

// if no match then it return undefined

console.log(result);

// immutable and mutable array methods

const personList1 = [{ name: "sachin" }, { name: "pritesh" }, { name: "amit" }];

function check(name) {
    const personDetails = personList1.find((abc) => abc.name === name);

    return personDetails ? person : "no person exist with this name";
}

console.log(check("sabiha"));
