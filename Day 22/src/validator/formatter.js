
const trimMethod=function(){
    let text = ' functionUp  ';
    let result = text.trim();
    console.log(result);
}

const changetoLowerCase=function(){
    let str="I aM a CoDeR";
    let ans=str.toLowerCase();
    console.log(ans);
}

const changeToUpperCase=function(){
    let str="I aM a CoDeR";
    let ans=str.toUpperCase();
    console.log(ans);
}

module.exports.trimMethod=trimMethod;
module.exports.changetoLowerCase=changetoLowerCase;
module.exports.changeToUpperCase=changeToUpperCase;