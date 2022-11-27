/*process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = Number(arr.shift());
    for(let i=0;i<t;i++){
        let num=arr[0].split(' ');
        let a=Number(num[0]);
        let b=Number(num[1]);
        let c=Math.max(a,b)-Math.min(a,b);
        console.log(c);
    }
});*/

process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = Number(arr.shift());
    for(let i=0;i<t;i++){
        let a=Number(arr.shift());
        let b=Number(arr.shift());
        let c=Math.max(a,b)-Math.min(a,b);
        console.log(c);
    }
});

