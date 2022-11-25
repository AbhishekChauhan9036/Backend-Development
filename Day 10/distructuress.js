/* https://drive.google.com/drive/folders/1cDXLVBoR9AdrK55GjYp3wFRUO8tAZpZ6 */


const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

// IMPORTANT: solve all problems using using destructuring and rest syntax

		
// ============================================================================= //
//1.
// remove first element from places array and print the remaining array 
// result = ['gurgaon', 'jaipur', 'pune'];

// let [,bb,cc,dd]=places;
// console.log(bb,cc,dd);


// ============================================================================= //
//2.
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']

// let [a,,,]=places;
// morePlaces.unshift(a);
// console.log(morePlaces);


// ============================================================================= //
// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]

// let [,b2,c2,d2]=morePlaces;
// let [u,v,y,]=places;
// console.log(b2,c2,d2,u,v,y);



const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]
  }
  
// 4.
// destructure and store pincode into a variable named myPincode
myData.address.myPinCode=221716;

// 5.
// destructure and store second like into a vaiable named myLike
myData.myLike = ["games","coding"];
// console.log(myData);

