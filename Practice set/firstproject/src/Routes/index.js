const express = require('express');

const model = require('../Models/index.js');

const solve = require('../Exercises/exercise.js');

const router = express.Router();

let num = ['1','2','3','4','5','6','7','8','9','0']
let atmPin = '2a3433'
let pin = atmPin.split('')
let isValid = false;
 
router.get('/atmpin', function(req, res){
    if (pin.length == 4 || pin.length ==  6){
        for(let i=0;i<=pin.length;i++){
            if(!num.includes(pin[i])){
                console.log('invalid character is '+pin[i])
                console.log()
                break;
            }
            isValid = true;
        }
    }
    res.send({"isValid": isValid})
});

router.get('/', function (req, res) {
    console.log('My first ever api!')
    res.send('first api response')
});

router.get('/example-foreach', function(req, res){
    let students =[
        {"firstName": "ram", "secondName": "raj", address: { city : "Delhi" , country: "India"} },
         { "firstName": "shyam", "secondName": "ji" , address: { city : "Bombay" , country: "India"} },
         { "firstName": "mohan", "secondName": "lal", address: { city : "Bangalore" , country: "India"} } 
    ]
    let cities=[]
    students.forEach(
      function abc(x) {
        cities.push(x.address.city)
      }
    )
    res.send({newArray:cities})  
})

router.get('/example-atmpin', function(req, res){
    let atmpin="7447"
    console.length(atmpin.length)
    if (atmpin.length==4 ||atmpin.length==6){
    res.send({isValid: true})
    }
    else{
      res.send({isValid: false})
    }
  })

//   router.get('/example-map', function(req, res){
//     let Books=[
//         {
//           id:1,
//           name: 'Jvascript',
//           author:'Ram',
//           category:'program',
//           publisher:'arhiant',
//           price:200,
//           },
//           {
//           id:2,
//           name:'java',
//           author:'Shyam',
//           category:'program2',
//           publisher:'westland',
//           price:300,
//           },
          
          
      
//       // let length = books.length;
//       // let bookDetails = books.map(Function book(x){
//       //   return book.bookNames;
//       // });
//       // res.send({data: {bookDetails, length}
//       // });
//       let id = req.params.id;
//       res.send({data: books[id]});    
//   })

let players=[{
      
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": ["swimming"],
    "bookings":[]

}];
const express = require("express");
const model = require("../Models/index.js");
// const exercise = require("../exrecises/exercise.js");
// const { forEach } = require("lodash");
const router = express.Router();
let players = [];
router.get("/players", function (req, res) {
  res.send(players);
});
router.post("/players", function (req, res) {
  let requestedPlayer = req.body;
  let playerName = requestedPlayer.name;
  let player = players.find((p) => p.name == playerName);
  if (player) {
    res.send("Player already exist");
  } else {
    players.push(requestedPlayer);
  }
  res.send(players);
});

batches -> groups


router.post("/players/:playerName/bookings/:bookingNumber", function(req,res){
  let requestedBooking = req.body;
  
  let playerName = req.params.playerName;
  let player = players.find((p) => p.name == playerName);
  //for loop index
  
  if (player) {
    let booking = player.bookings.find(b => b.bookingNumber == requestedBooking.bookingNumber)
    if(booking){
      res.send("Booking already exist")
    }else{
      players[index].bookings.push(requestedBooking)
      res.send(player.bookings)
    }
  } else {
    res.send("Player doesnt exist");
  }
})



// let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
// let atmPin = '1234'
// let pin = atmPin.split('')
// let isValid
// router.get('/atmpin', function (req, res) {
//     console.log('length of my spilt array '+pin.length)
//     //if(A || B) { 
//     //    
//     //}
//     if (pin.length != 4 && pin.length != 6) {
//         isValid = false;
//     } else if (pin.length == 4 || pin.length == 6) {
//         console.log('I am in else if block')
//         if (num.includes(pin)) {
//             isValid = true;
//         }
//     }
    
//     console.log(isValid)
//     res.send({ "isValid": isValid })
// });

//let players = []

router.post('/players-mine', function (req, res) {

    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    //let player = players.find(p => p.name == newPlayersName)

    for (let i = 0; i < players.length; i++) {
        if (players[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }

    console.log('Here i call solve')
    solve.solve1()
    solve.solve2()

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
        //Player exists
        res.send("This player was already added!")
    } else {
        //New entry
        players.push(newPlayer)
        res.send(players)
    }
});

module.exports = router;