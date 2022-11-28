const arr = [1, 2, 3, 6, 5, 4];


function triple(n){
	return n*3;
}	
var new_arr = arr.map(triple)
console.log(new_arr);




function product(a, b){
	return a * b;
}
var product_of_arr = arr.reduce(product)
console.log(product_of_arr)




var new_arr = arr.filter(function (x){
	return x % 2==0;
});
console.log(new_arr)




var array = [2, 7, 8, 9];
var found = array.find(function (element) {
    return element > 4;
});
console.log(found);




function func() {
    const items = [12, 24, 36];
    const copy = [];
    items.forEach(function (item) {
        copy.push(item + item+2);
    });
    console.log(copy);
}
func();