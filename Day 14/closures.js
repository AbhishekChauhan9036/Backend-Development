function sum(){
    let a=10;
    let b=20;

    function sumoftwo(){
        return a+b;
    }

    return sumoftwo;
}


console.log(sum());

