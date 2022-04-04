
let cquestions = [
//   {
//   numb: 1,
//   question: "What does CSS stands for ?",
//   answer: "Cascading style sheets",
//   options: [
//     "Cascade style sheets",
//     "Color and style sheets",
//     "Cascading style sheets",
//     "None of the above"
//   ]
// },
  // {
//   numb: 2,
//   question: "Which of the following is the correct syntax for referring the external style sheet?",
//   answer: `"<link rel="stylesheet" type="text/css" href="example.css">"`,
//   options: [
//     `"<style src = example.css>"`,
//    ` "<style src = "example.css" >"`,
//    ` "<stylesheet> example.css </stylesheet>"`,
//     `"<link rel="stylesheet" type="text/css" href="example.css">"`,
//   ]
// },
  // {
//   numb: 3,
//   question: "Which of the following CSS property is used to set the background image of an element?",
//   answer: "background-image",
//   options: [
//     "background-attachment",
//     "background-image",
//     "background-color",
//     "None of the above"
//   ]
// },
//   {
//   numb: 4,
//   question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
//   answer: "a {text-decoration : none;}",
//   options: [
//     "a {text-decoration : underline;}",
//     "a {decoration : no-underline;}",
//     " a {text-decoration : none;}",
//     "None of the above"
//   ]
// },
//   {
//   numb: 5,
//   question: `" How to select the elements with the class name "example"?"`,
//   answer: ".example",
//   options: [
//     "example",
//     "#example",
//     ".example",
//     "Class example"
//   ]
// },
// ]

// console.log(cquestions);
// let answerx=document.getElementById("input1");

let counter=0;
let buttonNext=document.getElementById("next");
let showanswer1 =document.getElementById("option1")
let showanswer2 =document.getElementById("option2")
let showanswer3 =document.getElementById("option3")
let showanswer4 =document.getElementById("option4")


function startquiz(){
quebody( cquestions[0] )
}

function quebody( cquestions ){
document.getElementById("que_text").innerHTML=  cquestions.question;
document.getElementById("option1").innerHTML=cquestions. options[0];
document.getElementById("option2").innerHTML=cquestions. options[1];
document.getElementById("option3").innerHTML=cquestions. options[2];
document.getElementById("option4").innerHTML=cquestions. options[3];
}
startquiz()


let i=0;
function showque() {
if (i==cquestions.length-1 ){  
  // document.getElementById("next").style.display="inline-block"
  document.getElementById("next").innerHTML="Submit";
  window.location="../show page/index.html"
}
else {
i++;
quebody(cquestions[i]);
console.log(quebody(cquestions[i]));
}
}
let x=0
function correctque(){

if()

showque();

}

correctque();
console.log(correctque());
function nextq(){

if(document.getElementById("option1")==cquestions[i].answer){

  alert("correct")
  
  counter++;

}
else if(showanswer2==cquestions[i].answer){
  
  alert("correct2")
}
else if(showanswer3==cquestions[i].answer){
  
  alert("correct3")
}
else if(showanswer4==cquestions[i].answer){
  
  alert("correct4")
}
// if(showanswer1.click==cquestions[i].answer){
//   alert("true");

}



// if(showanswer1==cquestions[i].answer){

//   alert("correct")
  
//   counter++;

// }
// else if(showanswer2==cquestions[i].answer){
  
//   alert("correct2")
// }
// else if(showanswer3==cquestions[i].answer){
  
//   alert("correct3")
// }
// else if(showanswer4==cquestions[i].answer){
  
//   alert("correct4")
// }