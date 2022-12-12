const express = require('express');
const router = express.Router();
const fp=require('lodash')
const intro = require('./introduction')
const wel=require('../logger/logger.js')
const ddmmyy=require('../util/helper.js')
const opestr=require('../validator/formatter.js')
const employee = require('./employee')
const _ = require('underscore')

router.get('/test-me', function (req, res) {


/*Assignment 1 Call.............................................................................*/
    wel.welcome("Abhishek Chauhan");

/*Assignment 2 Call.............................................................................*/
    ddmmyy.printDate();
    ddmmyy.printMonth();
    ddmmyy.getBatchInfo();

/*Assignment 3 Call.............................................................................*/
    opestr.trimMethod();
    opestr.changetoLowerCase();
    opestr.changeToUpperCase();


/*Assignment 4 Call.............................................................................*/
    const days = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let result = _.first(days, 4)
    console.log(result)

    const oddNumber=[1,3,5,7,9,11,13,15,17,19];
    let ansoodNumber=_.tail(oddNumber);
    console.log(ansoodNumber);

    const array1=[1, 2, 9, 40],array2=[1, 20, 3, 2];
    const withoutDublicate= _.union( array1, array2);
    console.log(withoutDublicate);


    let pairarr=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
    let obj = fp.fromPairs(pairarr);
    console.log(obj)


    res.send('any dummy text')
});



router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;