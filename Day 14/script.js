function SumoftwoNumber(){
    let a=90;
    function innerFunc(b){
        return a+b;
    }

    return innerFunc;
}

const callfunc=SumoftwoNumber();
console.log(callfunc(10));