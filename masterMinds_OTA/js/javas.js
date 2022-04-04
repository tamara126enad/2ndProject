'use strict';

const quiz_box = document.getElementById("quiz");
let que_count = 0;

function startTimer(duration, view_date) {
  var countdown = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(countdown / 60, 10);
      seconds = parseInt(countdown % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      view_date.textContent = minutes + ":" + seconds;

      if (--countdown < 0) {
          // countdown = duration;
          window.location="../pages/show.html"

      }
  }, 1000);
}

window.onload = function () {
  var minutesOfFive = 10*1,
      view_date = document.querySelector('#time');
   
  startTimer(minutesOfFive, view_date);
};




let jquestions = [
    {
    numb: 1,
    question: "Inside which HTML element do we put the JavaScript?",
    answer: "<script>",
    options: [
      "<scripting>",
      "<js>",
      "<javascript>",
      "<script>"
    ]
  },
    {
    numb: 2,
    question: "The four basic data types are:",
    answer: "strings, numbers, Booleans, and nulls",
    options: [
      "strings, numbers, BooBoos, and nulls",
      "strings, text, Booleans, and nulls",
      "strings, numbers, Booleans, and nulls",
      "strings, numbers, Booleans, and zeros"
    ]
  },
    {
    numb: 3,
    question: " What are the types of Pop up boxes available in JavaScript?",
    answer: "All of the above",
    options: [
      "Prompt",
      " Alert",
      " Confirm",
      " All of the above"
    ]
  },
    {
    numb: 4,
    question: "Which of the following keywords is used to define a variable in Javascript?",
    answer: "Both A and B",
    options: [
      "var",
      "let",
      "Both A and B",
      "None of the above"
    ]
  },
    {
    numb: 5,
    question: " How do we write a comment in javascript?",
    answer: "//",
    options: [
      "/**/",
      "//",
      "#",
      "$$"
    ]
  },

]