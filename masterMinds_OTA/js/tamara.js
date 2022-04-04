(function(){
    var data = {
        quizContent: [
            {
                question: "What does CSS stands for ?",
                answer1:  "Cascading style sheets",
                answer2:  "Color and style sheets",
                answer3:  "Case style sheets",
                correctAnswer: 1
            },
            {
                question: "If we want to wrap a block of text around an image, which css property will we use ?",
                answer1:  "wrap",
                answer2:  "push",
                answer3: "float",
                correctAnswer: 3
            },
            {
                question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
                answer1: "a {text-decoration : underline;}",
                answer2:  " a {text-decoration : no-underline;}",
                answer3: "a {decoration :none }",
                correctAnswer: 3
            },
            {
                question: `"Which of the following CSS property is used to set the background image of an element?`,
                answer1: "background-image",
                answer2:  "background-attachment",
                answer3: "background-color",
                correctAnswer: 1
            },
            {
                question: `" How to select the elements with the class name "example"?"`,
                answer1:  "example",
                answer2:  ".example",
                answer3:  "#example",
                correctAnswer: 2
            }
        ],
        points: 0
    };
    

    // window.location="../show page/index.html" 


//     const quiz_box = document.getElementById("quiz");
// let que_count = 0;
// function startTimer(duration, view_date) {
//   var countdown = duration, minutes, seconds;
//   setInterval(function () {
//       minutes = parseInt(countdown / 60, 10);
//       seconds = parseInt(countdown % 60, 10);

//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;

//       view_date.textContent = minutes + ":" + seconds;

//       if (--countdown < 0) {
//           // countdown = duration;
//           window.location="../show page/index.html"

//       }
//   }, 1000);
// }

// window.onload = function () {
//   var minutesOfFive = 10*1,
//       view_date = document.querySelector('#time');
   
//   startTimer(minutesOfFive, view_date);
// };



    var display = {
        getApp: document.getElementById('app'),

        // Updates DOM on start/restart of the quiz
        mainPage: function() {
            var newEl = '<div class="quest-number" style="color: #000;"><p id="questNumber"></p><span id="timer" style="color: #000;">2:00</span></div><h1 id="questionDisplay" class="h3"></h1>';
                newEl += '<ul><li><label><input type="radio" name="answers" id="input1" value="1"><span class="outer"><span class="inner"></span></span><div id="answerDisplay1"></div></label></li>';
                newEl += '<li><label><input type="radio" name="answers" id="input2" value="2"><span class="outer"><span class="inner"></span></span><div id="answerDisplay2"></div></label></li>';
                newEl += '<li><label><input type="radio" name="answers" id="input3" value="3"><span class="outer"><span class="inner"></span></span><div id="answerDisplay3"></div></label></li></ul>';
                newEl += '<div class="points-wrap"><p id="currentPoints" ></p></div>';
  
            this.getApp.innerHTML = newEl;
        },
  
        // Updates DOM with each question
        updateMainPage: function() {
            var getQuestNumber = document.getElementById('questNumber'),
                getTimer = document.getElementById('timer'),
                getQuestion = document.getElementById('questionDisplay'),
                getAnswer1 = document.getElementById('answerDisplay1'),
                getAnswer2 = document.getElementById('answerDisplay2'),
                getAnswer3 = document.getElementById('answerDisplay3'),
                getCurrentPoints = document.getElementById('currentPoints'),
                sumOfQuestions = data.quizContent.length;
                
            getQuestNumber.innerHTML = control.count + 1 + '/' + sumOfQuestions;
            getTimer.innerHTML = "2:00";
            getQuestion.innerHTML = data.quizContent[control.count].question;
            getAnswer1.innerHTML = data.quizContent[control.count].answer1;
            getAnswer2.innerHTML = data.quizContent[control.count].answer2;
            getAnswer3.innerHTML = data.quizContent[control.count].answer3;
            getCurrentPoints.innerHTML = 'Points:' + ' ' + data.points;
            this.newElement('button', 'submit', 'Submit Answer');
        },
        addAnswer: function(showMessage) {
            var sumOfQuestions = data.quizContent.length;
  
            if(showMessage === 'correct') {
                this.newElement('p', 'showAnswer', 'Correct Answer!');
                
            } else {
                this.newElement('p', 'showAnswer', 'Incorrect Answer!');
            }
  
            if (control.count < sumOfQuestions - 1) {
                this.newElement('button', 'nextQuest', 'Next question');
            } else {
                this.newElement('button', 'result', 'See your result');
            }
        },
        removeAnswer: function(event) {
            var getShowAnswer = document.getElementById('showAnswer');
            var getShowAnswerParent = getShowAnswer.parentNode;
            getShowAnswerParent.removeChild(getShowAnswer);
            var clickedEl = event.target;
            var clickedElParent = clickedEl.parentNode;
            clickedElParent.removeChild(clickedEl);
            var radioButtons = document.getElementsByName('answers');
            var allRadioButtons = radioButtons.length;
            var i;
  
            for(i = 0; i < allRadioButtons; i++) {
                radioButtons[i].checked = false;
            }
        },
  
        // Displays final page of the quiz
        resultPage: function() {
            if(data.points <=2){
                // body.style.backgroundColor="red";
             this.getApp.innerHTML = '<h1 class="h3" style="color: red;">You have ' + data.points + ' question(s) answered correctly</h1>';
             this.newElement('button', 'restart', 'Show answer');
            }
            else{
                this.getApp.innerHTML = '<h1 class="h3" style="color: green;">You have ' + data.points + ' question(s) answered correctly</h1>';
             this.newElement('button', 'restart', 'Show answer');
            }
           
            // this.getApp.style.backgroundColor="red";
            
        },
        newElement: function(elem, elemId, elemText) {
            var newElem = document.createElement(elem);
            var newElemText = document.createTextNode(elemText);
            newElem.appendChild(newElemText);
            newElem.id = elemId;
            this.getApp.appendChild(newElem);
        }
    };
  
    var control = {
        init:  
        // window.onload = function () {
        //     var minutesOfFive = 10*1,
        //         view_date = document.querySelector('#time');
             
        //     startTimer(minutesOfFive, view_date);
        //   }
        
        function() {
            var start = document.getElementById('start') || document.getElementById('restart');
            start.addEventListener('click', function() {
                display.mainPage();
                control.update();
            }, false);
        },
        update: function() {
            display.updateMainPage();
            var submit = document.getElementById('submit');
            submit.addEventListener('click', this.checkAnswer, false);
        },
  
        /**
        * Alerts if none of the radios is checked on submit 
        * Verifies correct/incorrect answer
        * Directs quiz to the next question or to the final page
        */
        checkAnswer: function(event) {
            var radioButtons = document.getElementsByName('answers'),
                allRadioButtons = radioButtons.length,
                isChecked = false,
                checkedRadio,
                clickedEl = event.target,
                clickedElParent = clickedEl.parentNode,
                i;
  
            for (i = 0; i < allRadioButtons; i++) {
                if (radioButtons[i].checked) {
                    isChecked = true;
                    checkedRadio = +radioButtons[i].value;
                }
            }
  
            if (isChecked === false) {
                alert('Please choose the answer!');
            } else {
                clickedElParent.removeChild(clickedEl);
                if (checkedRadio === data.quizContent[control.count].correctAnswer) {
                    display.addAnswer('correct');
                    data.points++;
                } else {
                    display.addAnswer();
                }
  
                var nextQuestion = document.getElementById('nextQuest'),
                    result = document.getElementById('result');
  
                if (nextQuestion) {
                    nextQuestion.addEventListener('click', function(event) {
                        control.count++;
                        display.removeAnswer(event);
                        control.update();
                    }, false);
                } else {
                    result.addEventListener('click', function() {
                        display.resultPage();
                        control.init();
                        control.count = 0;
                        data.points = 0;
                    }, false);
                }
            }
        },
  
        // Used for incrementing/looping through the quiz questions and answers
        count: 0
    };
  
    control.init();
  
  })();


/***************** timer ********************** */

  var cont = 10;   /// 2 min
    
var timer = setInterval(function() {
  var minutes = parseInt((cont % (60 * 60)) / (60));
  var seconds = parseInt(cont % (60));
  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
  if (cont < 0) {
    clearInterval(timer);
    window.location="../../masterMinds_OTA/pages/show.html";
  }
  cont =  cont - 1;
//   console.log(cont);
}, 1000);



function localStorage() {
let x =JOSN.stringify( '');
localStorage.setItem('data', x);  
}

localStorage()