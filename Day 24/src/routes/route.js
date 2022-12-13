// Video Solution Link 1:- https://drive.google.com/file/d/15HBju70OHVfsfbhL9wbomGpzVO3Nefu8/view?usp=share_link
// Video Solution Link 2:- https://drive.google.com/file/d/1IlZwnMDLUdNsTiagBzWK80hJk9M1zE0V/view?usp=sharing

const express = require("express");
const router = express.Router();
const intro = require("./introduction");
const employee = require("./employee");
const _ = require("underscore");


// Assignment 1.................................................................
router.get("/sol1", function (req, res) {
  let arr = [1, 2, 3, 5, 6];
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
  }
  let n = arr[arr.length - 1];
  sum2 = (n * (n + 1)) / 2;
  let ans = sum2 - sum1;
  res.send(`${ans}`);
});


// Assignment 2.................................................................
router.get("/sol2", function (req, res) {
  let arr = [33, 34, 35, 37, 38];
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
  }

  let sum2 = 0;
  let st = arr[0];
  let en = arr[arr.length - 1];
  for (let i = st; i <= en; i++) {
    sum2 += i;
  }

  let ans = sum2 - sum1;
  res.send(`${ans}`);
});

module.exports = router;
