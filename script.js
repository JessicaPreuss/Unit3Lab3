"use strict";
//declate variable named submissions that is initialized to an array with objects//
const submissions = [
    {
      name: "Jane",
      score: 95,
      date: "2020-01-24",
      passed: true
   },
   {
      name: "Joe",
      score: 77,
      date: "2018-05-14",
      passed: true
   },
   {
      name: "Jack",
      score: 59,
      date: "2019-07-05",
      passed: false
   },
   {
      name: "Jill",
      score: 88,
      date: "2020-04-22",
      passed: true
   }
];

//declare a function named addSubmission//

const addSubmission = (array, newName, newScore, newDate) => {
    let submission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
    };
console.log(submissions.push(submission));
};

//declare a function named deleteSubmissionByIndex, parameters array and index//
const deleteSubmissionByIndex = (array, index) => {
    submissions.splice(index,1,);
};
//declare a function named deleteSubmissionByName, parameters array, name//


const deleteSubmissionByName = (array, name) => {
    const index = array.findIndex(element => element.name === name);
    console.log(submissions.splice(index,1,));
};

//declare a function named editSubmission; parameters - array, index, score//

const editSubmission = (array, index, score) => {
    submissions[index].score = score; 
    submissions[index].passed = score >= 60; 
console.log(submissions);
};

//declare a function named findSubmissionByName; parameters (array, name)//

const findSubmissionByName = (array, name) => {
    const studentName = array.find(element => element.name === name);
    console.log(studentName);
};
//declare a function names findLowestScore with parameter array//

function findLowestScore (array) {
    let scoreArray = array.map(a => a.score)
        scoreArray.forEach(function(score){
            score = Math.min(...scoreArray)
            // console.log(score)
            const findLow = array.find(element => element.score === score);
            console.log(findLow);
         scoreArray.length = 0;
    })
};

//declare a function named findLowestScore parameter (array)//

function findAverageScore (array) {
    let scoreArray = array.map(a => a.score)
    let sum = 0;
    let total = 0;
    for (let score of scoreArray) {
        sum += score;
        total = sum / scoreArray.length;
    }
    console.log(total);
};

//declare a function named filterPassing - Parameters (array)//
function filterPassing (array) {
    
}