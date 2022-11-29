let arr=[89,87,65,45];
let newArr=arr.reduce((h1,h2)=>{
    return h1+h2;
})
// console.log(newArr);



const reduce_func=(h1,h2)=>{
    return h1-h2;
};
let newarr=arr.reduce(reduce_func)
console.log(newarr);