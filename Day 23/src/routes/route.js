// Video Link:- https://drive.google.com/file/d/1WqFuDn6vz-hTyYvTezx3rRqX6EFbpLW1/view?usp=sharing 



const express = require("express");
const router = express.Router();
const intro = require("./introduction");
const employee = require("./employee");
const _ = require("underscore");

// Assignment 1.................................................................
router.get('/movies', function (req, res) {
    const webSeries =  ["Mirjapur", "Hostel Daze", "Girls Hostel", "Kota Factory", "Mission MBBS", "Aspirants"];
    res.send(webSeries);
});


// Assignment 2.................................................................
router.get('/movies/:indexNumber',function(req,res){
    const webSeries =  ["Mirjapur", "Hostel Daze", "Girls Hostel", "Kota Factory", "Mission MBBS", "Aspirants"];
        if(webSeries.length>=req.params.indexNumber){
            res.send(webSeries[req.params.indexNumber]);
        }
});


// Assignment 3.................................................................
router.get('/movies/:indexNumber',function(req,res){
    const webSeries =  ["Mirjapur", "Hostel Daze", "Girls Hostel", "Kota Factory", "Mission MBBS", "Aspirants"];
        if(webSeries.length<=req.params.indexNumber){
            res.send("Please Enter a valid index Number");
        }
});


// Assignment 4.................................................................
router.get("/films", function (req, res) {
  const arr = ["The Shining","Incendies","Rang de Basanti","Finding Nemo"];
  const obj = Object.assign({}, arr)
  res.send(obj);
});


// Assignment 5.................................................................
router.get('/films/:id',function(req,res){
        let obj={
            "id":3,
            "name":"Rang de Basanti"
        }

        if(obj.id==req.params.id){
            res.send(obj.name);
        }

        res.send("No movie exists with this id");
});

module.exports = router;
