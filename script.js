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

addSubmission();

//declare a function named deleteSubmissionByIndex, parameters array and index//
const deleteSubmissionByIndex = (array, index) => {
    submissions.splice(index,1,);
};

deleteSubmissionByIndex();
//declare a function named deleteSubmissionByName, parameters array, name//


const deleteSubmissionByName = (array, name) => {
    const index = array.findIndex(element => element.name === name);
    console.log(submissions.splice(index,1,));
};

deleteSubmissionByName();

//declare a function named editSubmission; parameters - array, index, score//

const editSubmission = (array, index, score) => {
    submissions[index].score = score; 
    submissions[index].passed = score >= 60; 
console.log(submissions);
};

editSubmission ();
//declare a function named findSubmissionByName; parameters (array, name)//

const findSubmissionByName = (array, name) => {
    const studentName = array.find(element => element.name === name);
    console.log(studentName);
};

findSubmissionByName ();
//declare a function names findLowestScore with parameter array//

function findLowestScore (array) {
    let scoreArray = array.map(a => a.score)
        scoreArray.forEach(function(score){
            score = Math.min(...scoreArray);
            const findLow = array.find(element => element.score === score);
            console.log(findLow);
            scoreArray.length = 0;
    })
};

findLowestScore ();
//declare a function named findLowestScore parameter (array)//

function findAverageScore (array) {
    let scoreArray = array.map(a => a.score);
    let sum = 0;
    let total = 0;
    for (let score of scoreArray) {
        sum += score;
        total = sum / scoreArray.length;
    }
    console.log(total);
};

findAverageScore ();

//declare a function named filterPassing - Parameters (array)//
function filterPassing (array) {
    const findPassing = array.filter(element => element.passed === true);
    console.log(findPassing);
};

filterPassing ();

//declare a function named filter90AndAbove//
function filter90AndAbove (array) {
    const find90Plus = array.filter(element => element.score >= 90 );
    console.log(find90Plus);
};

filter90AndAbove ();