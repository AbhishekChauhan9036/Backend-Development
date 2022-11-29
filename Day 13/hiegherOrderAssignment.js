// write your own find and findIndex function
// (Hint: using for loop and if else)

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// ======================================================== //



const practiceData = [[14,21,23,64], [33,46,51,65]]
/**
 * requirement one
 * increment each number by one and output the resultant array using a higher order method and for loop
 * HINT: use nesting
 * solution =  [[15,22,24,65], [34,47,52,66]]
 * 
 * 
 * requirement two
 * from the above array, create an array of array of even numbers using a higher order method and for loop
 * solution = [[14,64], [46]]
 */

const plusOne = (number) => {
  return number + 1;  
};

for(let i=0;i<practiceData.length;i++){
  for(let j=0;j<practiceData[i].length;j++){
  //  console.log( plusOne(practiceData[i][j]));
  }
}


const isEven = (n) => {
  return n % 2 == 0;
}

const evenArray=[];
for(let i=0;i<practiceData.length;i++){
  for(let j=0;j<practiceData[i].length;j++){
   if(isEven(practiceData[i][j])){
    evenArray.push(practiceData[i][j]);
   }
  }
}

console.log(evenArray);



// ======================================================== //

  // problem => return an array such that numbers at odd idex are multiplied by 2
  // and numbers at even index are multiplied by 10
    const array = [23 , 45,467, 789, 34, 989, 56]
    const indexOddEven = (n) => {
      if(n % 2 ===0){
        return 0;
      }return 1;
    }
    const EvenArray2=[];
    for(let i=0;i<array.length;i++){
      if(indexOddEven(i)){
        EvenArray2.push(array[i]*2);
      }
      EvenArray2.push(array[i]*10);
    }

    console.log(EvenArray2);
  
// ======================================================== //




 const carBrands = ["honda", "toyota", "maruti","tata"]
 const carModel = ["city", "innova", "alto", "nano"]
 
//  using a higher order method, create a carObject variable such that 
/**
 * 
 * {
 * honda:city,
 * toyota:innova,
 * maruti:alto,
 * tata:nano
 * }
 */
const carObject = {};
carBrands.forEach((a, i) => {
carObject[a] = carModel[i];
});
console.log(carObject);
 
// ======================================================== //


 /**
  *  Flattening
 Use the reduce method 
 to â€œflattenâ€ an array of arrays into a single array that has all the elements of the original arrays.
 

 // result =  [1, 2, 3, 4, 5, 6]
  * 
  * 
  */
 const rrArr = [[1, 2, 3], [4, 5], [6]];
 const neAnswer=rrArr.reduce((a, b) => {
  a = [...a, ...b]
  return a;
  }, [])
  console.log(neAnswer);
// ======================================================== //


 /**
  * const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
  * return an array with all words converted into uppercase using higher order function
  * const countries = ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']
  * 
  * 
  * 
  */
  const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
  const answercapital= countries.map(element => element.toUpperCase());
  console.log(answercapital);
// ======================================================== //




