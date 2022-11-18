    //JS DATATYPES: Number || String || Arrays || Object

var a= 34
var b= "hi there. welcome to the future"
console.log( a )
console.log( b )



var arr = [ 12, 23 , 891372 ]
console.log(arr)

var cars = [ "audi", "mercedes", "bmw", "maruti"]
console.log( cars)

var randomArr = [ "hi", 12, 23, 76, 1 , "else"]

console.log( randomArr)

// Objects


var myCar= {
     "company" : "Mercedes"   ,
    "model": "Gla",
    "color": "White"
}
console.log( myCar )
console.log( myCar.color )
console.log( myCar["model"] )
console.log ( myCar.company + myCar.model + " in " + myCar.color + " colour.")

// concatenation: "Mercedes" + "Gla" + " in " + "White" + " color" 
//collection of key and their values
// collection of properties or attributes
// object == collection of keyValue pairs



// "var naming Rules":-
//  begin with alphabets
//  aplphabets , digits, _ and $ (not contain -)
// case sesitive
//  dont use reserved words

//camel case: style of writing variable name
//startWithALowerCaseAlphabet. 
//and if more than 1 word then , next words should start with a capital letter
var myPet = {
      "breed"  : "GR",
    "name": "snow",
    "color": "brown",
    "age": 10,
    "siblings": ["george", "python", "john"]
}

console.log( "My dog is a" + myPet.breed )
console.log( "My dog is a" , myPet.breed )
console.log( myPet.breed, myPet.name, "is of colour", myPet.color)

// STRINGS
var str= "FunctionUp is awesome. It is the best thing to happen to our lives."
console.log( str.length )

var name= "Rohit Sharma"
console.log( name.length ) // it counts all characters- including space

//escape characters: \
// Ram said:- "Laxman bro, come here" and Laxman went to Lanka
var str= "Ram said:- \"Laxman bro, come here\" and Laxman went to Lanka "

console.log( str)

var promise= "Pritesh Sir said:- \" FunctionUp will always be there for you.\" "
console.log( promise)

