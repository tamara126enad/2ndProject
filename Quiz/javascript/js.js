"use strict";

let item= [document.getElementById("label1"),document.getElementById("label2"),document.getElementById("label3"),document.getElementById("label4")];

let item2=[document.getElementById("option1"),document.getElementById("option2"),document.getElementById("option3"),document.getElementById("option4")];

let useranswer=[];



let jsquestions = [
    {
    numb: 1,
    question: "Which type of JavaScript language is ___?",
    answer:  "Object-Based",
    options: [
      "Object-Oriented",
      "Object-Based",
      "Assembly-language",
      "High-level"
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
    question: "The 'function' and ' var' are known as: ",
    answer: "Declaration statements",
    options: [
      "Keywords",
      "Data types",
      "Declaration statements",
      "Prototypes"
    ]
  },]


////////////////////////////////////////////////////////

function startquiz(){
    quebody( jsquestions[0] )
  
    
  }
  
  function quebody( x ){
   document.getElementById("queque").innerHTML= x.question;
   document.getElementById("label1").innerHTML= x.options[0];
   document.getElementById("label2").innerHTML= x.options[1];
   document.getElementById("label3").innerHTML= x.options[2];
   document.getElementById("label4").innerHTML= x.options[3];
  
  }



  startquiz()
  ///////////////////////////////////////////////////
  let i=0;
  function nextQue(){
      if (i==jsquestions.length-1){
  
          document.getElementById("next").innerHTML="Submit";
          window.location="../../result/js/index.html";
      }

      else{
          i++;
          quebody(jsquestions[i]);

      }
  
  }
                                               

//////////////////////////////////////////////
let userchoise;
let choose=0;
for(let i=0; i<item.length; i++){
item[i].onclick=function(){
document.getElementById("next").disabled = false;
  userchoise=this.textContent;
  // console.log(this.textContent);
  choose=1;
  // if(choose==jsquestions[i].answer)
  // {
  // //    label1.style.background="green"
  // // label2.style.background=""
  // // label3.style.background=""
  // // label4.style.background=""
  //     alert("correct");
  // } else{
  //     alert("incorrect");
  //     // label1.style.background="red"
  //     // label2.style.background=""
  //     // label3.style.background=""
  //     // label4.style.background=""
  // }


}
}

let correctanswer=["Object-Based","strings, numbers, Booleans, and nulls",  "All of the above"," All of the above", "Declaration statements"];
/////////////////////////////////////////////////////
let e=0;
 function next(){
document.getElementById("next").disabled = true;

  useranswer[e]=userchoise;
  console.log(useranswer);

  for(let i=0; i<item.length ;i++){
    // item[i].checked=false;
    item[i].style.backgroundColor="white";

    item2[i].checked=false;
  }

    if(choose>0){
        quebody(jsquestions[0]);
        nextQue();
    }

    // console.log(this);
    console.log(useranswer);
    if(e<jsquestions.length){

      ansStorage();
    }
    e++;
    
 }



/////////////////////////////////////////////////// timer

var sec =120;
   
var time = setInterval(function() {
  var minutes = parseInt((sec % (60 * 60)) / (60));
  var seconds = parseInt(sec % (60));
  document.getElementById("timer").innerHTML = minutes + ":" + seconds ;
  if (sec < 0) {
    clearInterval(timer);
    
    window.location="../../result/js/index.html";
  }
  sec =  sec - 1;
}, 1000);


////////////////////////////////////////////// local 

function ansStorage(){

  let answerstorage = JSON.stringify(useranswer);
  localStorage.setItem("Data",answerstorage);


}









