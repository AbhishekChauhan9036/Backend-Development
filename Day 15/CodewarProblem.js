/*https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript  
https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript (Send explainer video for your code)
https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript
https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript
https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript
https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript
https://www.codewars.com/kata/55e3f27d5dee52d8dd0000a9/train/javascript
https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript*/

// Solution 1............................................................................ 
function isPalindrome(string) {
  string =string.toUpperCase();
 const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}



// Solution 2............................................................................ 
function doubleChar(str) {
    let ans="";
    for(let i=0;i<str.length;i++){
      ans+=str[i]+str[i];
    }
    return ans;
}

// Solution 3............................................................................ 
function ensureQuestion(s) {
    for(let i=0;i<s.length;i++){
      if((s[s.length-1])=="?"){
      return s;
    }}
    return s+"?";
}


// Solution 4............................................................................ 
function add(a,b){
    return a+b;
}
function divide(a,b){
    return a/b;
}
function multiply(a,b){
    return a*b;
}
function mod(a,b){
    return a%b;
}
function exponent(a,b){
    return a**b;
}
function subt(a,b){
    return a-b;
}


// Solution 5............................................................................ 
function greet(name){
    return `Hello, ${name} how are you doing today?`;
}


// Solution 6............................................................................ 
var filterString = function(value) {
    let ans="";
    for(let i=0;i<value.length;i++){
      if(value[i]>=0 && value[i]<=9){
        ans+=value[i];
      }
    }
    return Number(ans);
}


// Solution 7............................................................................ 
function highAndLow(numbers){
  numbers=numbers.split(" ")
  let max = Math.max(...numbers);
  let min=Math.min(...numbers);
  return `${max} ${min}`;
}


// Solution 8............................................................................ 
function findShort(s){
  let arr=s.split(" ");
  let min=arr[0].length;
  for(let i=0;i<arr.length;i++){
    if(arr[i].length<min){
      min=arr[i].length;
    }
  }
  return min;
}


// Solution 9............................................................................ 
function getEvenNumbers(numbersArray){
  let result = numbersArray.filter((n) => n % 2 == 0);
  return result;
}


// Solution 10............................................................................ 
function quickSort(originalArr) {
  if (originalArr.length <= 1) {
    return originalArr;
  } else {
    var leftArr = [];
    var rightArr = [];
    var newArr = [];
    var pivot = originalArr.pop();
    var length = originalArr.length;
    for (var i = 0; i < length; i++) {
      if (originalArr[i] <= pivot) {
        leftArr.push(originalArr[i]);
      } else {
        rightArr.push(originalArr[i]);
      }
    }
    return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr));
  }
}
function diffBig2(arr) {
  let ar = quickSort(arr);
  return ar[ar.length-1]-ar[ar.length-2];
}



// Solution 11............................................................................ 

// Solution 12............................................................................ 

// Solution 13............................................................................ 

// Solution 14............................................................................ 


// Solution 15............................................................................ 
