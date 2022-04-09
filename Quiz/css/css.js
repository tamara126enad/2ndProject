"use strict";

let item= [document.getElementById("label1"),document.getElementById("label2"),document.getElementById("label3"),document.getElementById("label4")];

let item2=[document.getElementById("option1"),document.getElementById("option2"),document.getElementById("option3"),document.getElementById("option4")];

let useranswer=[];



let cssquestions = [
    {
    numb: 1,
    question: "What does CSS stands for ?",
    answer: "Cascading style sheets",
    options: [
      "Cascade style sheets",
      "Color and style sheets",
      "Cascading style sheets",
      "None of the above"
    ]
  },
    {
    numb: 2,
    question: " The HTML attribute used to define the inline styles is ?",
    answer:  "style",
    options: [
      "style",
      "styles",
      "class",
      "None of the above"
    ]
  },
    {
    numb: 3,
    question: "Which of the following CSS property is used to set the background image of an element?",
    answer: "background-image",
    options: [
      "background-attachment",
      "background-image",
      "background-color",
      "None of the above"
    ]
  },
    {
    numb: 4,
    question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
    answer:  " a {text-decoration : none;}",
    options: [
      "a {text-decoration : underline;}",
      "a {decoration : no-underline;}",
      " a {text-decoration : none;}",
      "None of the above"
    ]
  },
    {
    numb: 5,
    question: " How to select the elements with the class name 'example'?",
    answer:".example",
    options: [
      "example",
      "#example",
      ".example",
      "Class example"
    ]
  }];


 // let correctanswer=[ "Cascading style sheets", "style", "background-image", " a {text-decoration : none;}", ".example"];
////////////////////////////////////////////////////////

function startquiz(){
    quebody( cssquestions[0] )
  
    
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
      if (i==cssquestions.length-1){
  
          document.getElementById("next").innerHTML="Submit";
          window.location="../../result/css/index.html"
          // document.getElementById("next").click.href="../../result/css/index.html";
      }

      else{
          i++;
          quebody(cssquestions[i]);

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
  // if(choose==cssquestions[i].answer)
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

let correctanswer=[ "Cascading style sheets", "style", "background-image", " a {text-decoration : none;}", ".example"];
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
        quebody(cssquestions[0]);
        nextQue();
    }

    // console.log(this);
    console.log(useranswer);
    if(e<cssquestions.length){

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
    
    window.location="../../result/css/index.html"
  }
  sec =  sec - 1;
}, 1000);


////////////////////////////////////////////// local 

function ansStorage(){

  let answerstorage = JSON.stringify(useranswer);
  localStorage.setItem("Data",answerstorage);


}









