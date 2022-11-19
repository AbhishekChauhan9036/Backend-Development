// NUMBERS
var a = 10
var b= 25

// console.log( a - b)

// Increment and Decrement


a++ // post Inc
console.log(a) // 11

++b // pre Inc
console.log( b )

var c= 5
var d = 12

console.log( ++c ) // 6= 5+ 1 ( ++c is Pre Inc. - it increases the value first )

//13= 12 + 1 ( d++ is Post Inc-the expression completes and then the value of d increases the value by 1)
console.log( d++ ) // 12 
console.log( d ) // 13 
console.log( d) 
console.log( d) 


//  --p is Pre Decrement
//  q-- is post Dec.

var p = 10
var q= 30

console.log( --p)
console.log( q--)
console.log( q)
console.log( q)
console.log( q)


//  THINK OVER:
var abc= 10
console.log( abc++   +    abc  ) // 21

// MATH Functions: Math library
var r= Math.round( 12.5 ) // rounding off a number
console.log( r)

var u= Math.ceil( 5.00001 ) // ceil will round to the closest upper integer
var u= Math.ceil( 5 )
console.log(u)

var f= Math.floor( 3 ) // floor will round down to the closest integer
var f= Math.floor( 3.9999 ) // floor will round down to the closest integer
console.log(f)

console.log( Math.min( 12 , 3 , 5, 78 ) )

var mx= Math.max( 12 , 5 , 54, 45 ,454,545,423,312,323 )
console.log( mx )

var no1= Math.random() // Math.random() to generate random decimal number between [0 to 1 ) 
//  0 , 0.00000001 .... 0.9999999 ( 0 is included as a possibillity, BUT 1 is excluded)
console.log( no1)

//  generate a random number between 100 and 200 : [ 100 , 200 )
var ans= (Math.random( ) * 100) + 100 // [0,1) * 100 = [0, 100 ) + 100 ==> [100 , 200 )
console.log( ans )

// INCORRECT: Math.random( )  ===> [0, 1) * 101 = [0, 101 ) + 100 === >[100 , 201 ) 

// generate a random number ( not necessarily integer) between 115 to 149 [ 115, 149 ) 
var no2= (Math.random() * 34 ) + 115
console.log(no2)

console.log(Math.floor( no2 ) ) // [115 , 116....148 ]

// Randomly generate an integer from 1 to 6 like in game of LUDO
// SOLUTION:-  1+ Math.floor ( Math.random() *6 )

// ARRAYS:-
var fruits= [ "apple", "mango", "guava", "kiwi", "melon", "tomato", "banana", "orange"]

console.log( fruits.length)

console.log( fruits[2] )

// the index(position) of last element = length of the array - 1

var len = fruits.length
console.log( len)

console.log( fruits[ len -1 ])


var cars = [ "audi", "mercedes", "bmw", "maruti" , "tata"]
console.log( cars[ cars.length - 1 ]  ) // cars [4]


//  arrName.toString() - joins all the elements as a single string and seperated by a comma

console.log( cars.toString() )

var evenNos= [ 2, 4, 6, 8 , 10 , 12 ]
var str= evenNos.toString()
console.log ( str )

// arr.join("-") :Lets say you want to be joined with a - in between
console.log(        evenNos.join("-")       )
var s= evenNos.join( "FEVICOL")
console.log(s)

var arr2= [ 23, "hi", "hello", "uhhh", "ohh", 1238739183]
console.log( arr2.join( "$") )
console.log( arr2.join( " ") )
console.log( arr2.join( "") )

// Add and remove elements from an array
//  push and pop:

// PUSH DOES 2 things:
// -it adds 1 element to the end of the array
// -it returns the NEW length of the array

var heroes= [ "batman", "ironman", "thor", "doga", "shaktiman", "nagraj"]
var n= heroes.push("naagin")

console.log( heroes )
console.log( n)


// POP DOES 2 things:
// -it removes 1 element from the end of the array
// -it returns the removed element
var people= ["modiji", "rishi", "trump"]
var returned= people.pop()
console.log( people)
console.log( returned)


// unshift and unshift
// UNSHIFT DOES 2 things:
// -it adds 1 element to the starting of the array
// -it returns the NEW length of the array

var people= ["modiji", "rishi", "trump"]
var l= people.unshift("joe")
console.log( people)
console.log( l)


// // shift DOES 2 things:
// // -it removes 1 element from the start of the array
// // -it returns the removed element
var even= [ 0, 2 ,4, 6, 8 ]
var r= even.shift()
console.log( even)
console.log( r)

// //  always prefer deleteing and adding to end of an array - prefer push/pop over unshift/shift

// //SPLICE:  addding and deleting in mid of an array
var nos= [ 23, 2, 7 , 1, 4, 8, 9]
// //SPLICE(index where you want to act, the no of elements to delete, ...elements that you want to add..) )
nos.splice( 2, 3, "hi", "hello", 980)
console.log( nos)

var people= ["modiji", "rishi", "trump", "rahul" , "adaniJi"]
people.sort()
console.log( people)
// sort will : - 
//  1. sort alphabetically ( lexicographic sorting)
//  2.it will change the original array : will sort it 


var no2= [ 23, 2, 7 , 1, 4, 8, 9, 17, 1280] // 1 2 4 , 7  8 9 , 17 , 23 , 1280
no2.sort()
console.log( no2)

// ASSIGNMENT:
// 1.  //  THINK OVER:
// var abc= 10
// console.log( abc++   +    abc  ) // 21

//  2. read SPLICE and SLICE

//  3. find how to sort an array of numbers NUMERICALLY  