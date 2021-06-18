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
submissions.push(submission);
}

addSubmission();
