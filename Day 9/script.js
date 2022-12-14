/*

link:-  https://docs.google.com/document/d/1l6zWNT_lhIM4cEiaPMwrRxqPaUlUxZ6yEhvAhbDbnBo/edit#
Kata problems:
SET 1
https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript 
https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript
https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript 
https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript  (Send explainer video for your code)
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript (Send explainer video for your code)
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript   (Also Submit explainer video for this code)
https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript 

HINTS to some of the questions:
https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript (use Number function)
https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript ( consider for addition  only if greater than 0)
https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript  ( check for modulus ..num % 2 == 0)
https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript ( use switch case)


https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript   ( dont forget to round off using Math functions)
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript ( use modulus)
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript (split the string on <space> character and pick up the first character from  the resulting strings)
https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript (use array pop push 
*/




// 1st Solution........................................................
const stringToNumber = function(str){
  return Number(str);
}





// 2nd Solution........................................................
function positiveSum(arr) {
  let sum=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
      sum+=arr[i];
    }
  }
  return sum;
}




// 3rd Solution........................................................
function testEven(n) {
if(n%2===0){
  return true;
}
return false;
}





// 4th Solution........................................................
function updateLight(current) {
  let str="";
  if(current==="green"){
    str="yellow";
  }else if(current==="yellow"){
    str="red";
  }else if(current==="red"){
    str="green"
  }
 return str;
}






// 5th Solution........................................................
function getAverage(marks){
    let sum=0;
    let lent=marks.length;
    for(let i=0;i<marks.length;i++){
      sum+=marks[i];
    }
    
    return  Math.floor(sum/lent)
  }



// 6th Solution........................................................
  function removeChar(str){
   str.split('');
   let ans="";
     for(let i=1;i<str.length-1;i++){
       ans+=str[i];
     }
     return ans;
   };



// 7th Solution........................................................
class SmallestIntegerFinder {
    findSmallestInt(arr) {
      let mini=arr[0]
      for(let i=0;i<arr.length;i++){
        if(arr[i]<mini){
          mini=arr[i]
        }
      }
      return mini;
    }
  }




// 8th Solution........................................................
function simpleMultiplication(number) {
  if(number%2===0)
    {
      return number*8;
    }
  return number*9;
}





// 9th Solution........................................................
function abbrevName(name){
  const arrrrr= name.split(" ");
   let aa=arrrrr[0];
   let bb=arrrrr[1];
   let ans=aa.charAt(0).toUpperCase()+'.'+bb.charAt(0).toUpperCase();
   return ans;
 }





 // 10th Solution........................................................
 function reverseList(list) {
  let arr=[];
  for(let i=0;i<list.length;i++){
    arr.push(list[list.length-i-1])
  }
  return arr;
}