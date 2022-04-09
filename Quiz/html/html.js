"use strict";

let item= [document.getElementById("label1"),document.getElementById("label2"),document.getElementById("label3"),document.getElementById("label4")];

let item2=[document.getElementById("option1"),document.getElementById("option2"),document.getElementById("option3"),document.getElementById("option4")];

let useranswer=[];



let htmlquestions = [
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
  },]


 // let correctanswer=[ "Cascading style sheets", "style", "background-image", " a {text-decoration : none;}", ".example"];
////////////////////////////////////////////////////////

function startquiz(){
    quebody( htmlquestions[0] )
  
    
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
      if (i==htmlquestions.length-1){
  
          document.getElementById("next").innerHTML="Submit";
          window.location="../../result/html/index.html"
      }

      else{
          i++;
          quebody(htmlquestions[i]);

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
  // if(choose==htmlquestions[i].answer)
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

let correctanswer=[ "Hyper Text Markup Language", "H1", "1-6","Br", "Ol"];
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
        quebody(htmlquestions[0]);
        nextQue();
    }

    // console.log(this);
    console.log(useranswer);
    if(e<htmlquestions.length){

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
    
    window.location="../../result/html/index.html";
  }
  sec =  sec - 1;
}, 1000);



////////////////////////////////////////////// local 

function ansStorage(){

  let answerstorage = JSON.stringify(useranswer);
  localStorage.setItem("Data",answerstorage);


}









