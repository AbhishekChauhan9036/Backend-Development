
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const printDate=function(){
    console.log(date);
}


const printMonth=function(){
    console.log(month);
}

const getBatchInfo=function(){
    console.log(`Californium, W3D4, the topic for today is Nodejs module system`);
}

module.exports.printDate=printDate;
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;
