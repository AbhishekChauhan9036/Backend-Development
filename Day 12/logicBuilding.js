/*Week 2

PROBLEM STATEMENT

You are given some information for a few students - their names and their weekly score. You have to create sample data on your own and write code to find out
- average score of this batch for the current week
- top scorer candidate (any one)
- lowest scorer candidate (any one)

Naruto - 35
Sasuke - 40
Gaara - 50
Sakura - 40
Shikamaru - 65*/


SOLUTION

//vairable/ constant

const studentDetails = [

{
    name: "Sasuke",
    score: 40
},
{
    "name": "Naruto",
    "score": 35
},
{
    name: "Gaara",
    score: 50
},
{
    name: "Sakura",
    score: 40
},
{
    name: "Shikamaru",
    score: 65
}]


// 1) average score of this batch for the current week
let totalScore = 0
 for(let i = 0; i < studentDetails.length; i++) {
    totalScore = totalScore + studentDetails[i].score
 }

const averageScore = totalScore / studentDetails.length
console.log("The average weekly score for the batch is: ",averageScore)

// 2) top scorer candidate (any one)
let maxScore = 0
let topper = {}
for(let i = 0; i <= studentDetails.length - 1; i++) {
    if(studentDetails[i].score > maxScore) {
        topper = studentDetails[i]
        maxScore = studentDetails[i].score
    }
}
console.log("The weekly topper of the batch is: ", topper.name)
console.log("And the top score is: ",topper.score)

// 3) lowest scorer candidate (any one)
let minScore = studentDetails[0].score  // 40
let lowPerformer = studentDetails[0]
for(let i = 0; i < studentDetails.length; i++) {
    if(studentDetails[i].score < minScore) {
        lowPerformer = studentDetails[i]
        minScore = studentDetails[i].score
    }
    console.log("Student with minimum score is: ", lowPerformer.name)
    console.log("Minimum score is: ", lowPerformer.score)
}


/*
Naruto - 35
Sasuke - 40
Gaara - 50
Sakura - 40
Shikamaru - 65
*/


/*HOMEWORK
Try to figure out a way to initialise maxScore as well as topper*/