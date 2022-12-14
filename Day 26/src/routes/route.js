const express = require("express");
const router = express.Router();

let persons = [
  {
    name: "PK",
    age: 10,
    votingStatus: false,
  },
  {
    name: "SK",
    age: 20,
    votingStatus: false,
  },
  {
    name: "AA",
    age: 70,
    votingStatus: false,
  },
  {
    name: "SC",
    age: 5,
    votingStatus: false,
  },
  {
    name: "HO",
    age: 40,
    votingStatus: false,
  },
];

router.post("/query-params", function (req, res) {
  let input = req.query.input;
  let arr = [];
  for (i = 0; i < persons.length; i++) {
    if (persons[i].age > input) {
      persons[i].votingStatus = true;
      arr.push(persons[i]);
    }
  }
  return res.send(arr);
});

module.exports = router;
