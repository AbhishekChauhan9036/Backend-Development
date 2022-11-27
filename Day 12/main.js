process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = Number(arr.shift());
    while(t--){
        let a=Number(arr.shift());
        let b=Number(arr.shift());
        let c=Math.max(a,b)-Math.min(a,b);
        console.log(c);
    }
});