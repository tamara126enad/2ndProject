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





let hquestions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "Choose the correct HTML tag for the largest heading?",
    answer: "H1",
    options: [
      "H1",
      "Heading",
      "Head",
      "H6"
    ]
  },
    {
    numb: 3,
    question: "What are the different levels of headings in HTML?",
    answer: "1-6",
    options: [
      "1-6",
      "2-5",
      "1-4",
      "1-10"
    ]
  },
    {
    numb: 4,
    question: "Which tag would be used for a line break?",
    answer: "Br",
    options: [
      "Lb",
      "Brk",
      " Ln",
      "Br"
    ]
  },
    {
    numb: 5,
    question: "How can you make a list that lists the items with numbers?",
    answer: "Ol",
    options: [
      "List",
      "Dl",
      "Ol",
      "Ul"
    ]
  },
]