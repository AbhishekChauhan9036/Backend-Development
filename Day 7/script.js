/*1. Print all even numbers in first 50 natural numbers
2. print all odd numbers in natural numbers from 20 to 50
3. print all numbers that are divisible by 5 
         [12, 45, 67, 89, 90, 34, 35, 55]
4. Print all numbers of this array
		 [[1,2], [3,4], [5,6], [7,8]]
5.Print all prime numbers occurring in 1st 50 natural numbers*/

/*1..Solution.............................*/
for(let i=1;i<=50;i++){
    if(i%2===0){
        console.log(i);
    }
}


/*2..Solution.............................*/
for(let i=20;i<=50;i++){
    if(i%2!=0){
        console.log(i)
    }
}


/*3..Solution.............................*/
let arr=[12, 45, 67, 89, 90, 34, 35, 55]
for(let i=0;i<arr.length;i++){
    if(arr[i]%5==0){
        console.log(arr[i]);
    }
}

/*4..Solution.............................*/
let brr=[[1,2], [3,4], [5,6], [7,8]]
for (let i=0;i<brr.length;i++) {
    for(let j=0;j<2;j++){
      console.log(brr[i][j]);
     }
}



/*5..Solution.............................*/
for(let i=1;i<=50;i++){
    let check=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            check=1;
            break;
        }
    }

    if(check==0 && i>1){
        console.log(i);
    }
}