/*problem 1
if the number is even and less than 15, print a
if the number is even and more than 15, print b
if the number is odd and less than 10, print c
if the number is odd and more than 10, print d
We need to solve this using two methods
using nested if else
using logical operators*/
// Solution 1..............................................................................
function Solution_1(num){
        if(num%2===0 && num<15){
            console.log("a");
        }else if(num%2===0 && num>15){
            console.log("b");
        }else if(num%2!==0 && num<10){
            console.log("c");
        }else{
            console.log("d");
        }
}
// Solution_1(11);



/*problem 2
Result answer should be: "Hi, my name is Farheena"
we need to solve this using for loop*/
// Solution 2..............................................................................
function Solution_2(){
    let arr=["Hi", "my", "name", "is", "Farheena"];
    let ans="";
    for(let i=0;i<arr.length;i++){
        if(arr[i]==="Hi"){
          ans+=arr[i]+", ";
        }else{
          ans+=arr[i]+" ";
        }
    }
    console.log(ans);
}
// Solution_2();





/*problem 3
global scope and local scope*/
// Solution 3..............................................................................
var Fname="Abhishek";//Global Scope
function Solution_3(){
    let Lname="Chauhan";//Local Scope
    console.log(Fname+" "+Lname);
}
// Solution_3();




/*problem 4
create a variable called myName and store your name inside it.
then, add Mr./Miss. before it and store the result in
a new variable with the same name i.e. myName.*/
// Solution 4..............................................................................
function Solution_4(){
    let myName="Abhishek Chauhan";
    myName="Mr. "+myName;
    console.log(myName);
}
// Solution_4();






/*problem 5
Find sum and multiplication of  all natural numbers from 10 to 20*/
// Solution 5..............................................................................
function Solution_5(){
    let sum=0;
    let multiplication=1;
    for(let i=10;i<=20;i++){
        sum+=i;
        multiplication*=i;
    }
    console.log(`Sum is:${sum} and multiplication is:${multiplication}`);
}
// Solution_5();




/*problem 6
Check whether a given year is a leap year
create a variable and store a random year in it 
now write code, which should return  true or false, 
depending whether the value in the above variable is leap year or not*/
// Solution 6..............................................................................
function Solution_6(year){
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
// console.log(Solution_6(2001));







/*problem 7
find the area of a triangle.  Lengths of its sides are 5, 6, 7*/
// Solution 7..............................................................................
function Solution_7(){
  let a,b,c;
  a=7;
  b=5;
  c=9;
  let s = (a + b + c)/2;
  let area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
  console.log(area);
}
// Solution_7();



/*problem 8
create two variables and store numbers in them.
Now, write code, which return true if one of the variable is 50 or if their sum is 50.
Otherwise, you need to return false.
Also handle edge cases
(in real world, these two numbers will be supplied by the users.
Now think what if they supply something which is not a number ?)*/
function Solution_8(a,b){
  if(isNaN(a) && isNaN(b)){
    return "Please enter a Valid Number";
  }
  else if(a===50 || b===50 || (a+b)===50){
    return true;
  }
  return false;
}
// console.log(Solution_8(7,30));





/*problem 9
create a variable and store a number inside it
write program to check whether a given variable is between 100 and 200
write program to check whether a given variable is between 100 and 200 or 400 and 500
handle edge cases*/
function Solution_9(num){
    if((num>=100 && num<=200) || (num>=400 && num<=500)){
        return true;
    }
    return false;
}
// console.log(Solution_9(250));






/*problem 10
you have 3 numbers.
write a program which can find the largest number*/
function Solution_10(){
  let a=10;
  let b=20;
  let c=13;
  if(a>b && a>c){
    console.log(`a is largest number: ${a}`);
  }else if(b>a && b>c){
    console.log(`b is largest number: ${b}`);
  }else{
    console.log(`c is largest number: ${c}`);
  }
}
// Solution_10();





/*problem 11
create two variables and assign numbers to them
now write a code which returns true if one of them 
is 8 or their sum or difference is 8. Otherwise it should return false*/
function Solution_11(a,b){
  if(a===8 || b===8 ||(a-b)===8 || (a+b)===8 || (b-a)===8){
    return true;
  }
  return false;
}
// console.log(Solution_11(10,18));