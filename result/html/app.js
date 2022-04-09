"use strict";

let title= document.getElementById("title");

let a=localStorage.getItem("Data");
let info5=JSON.parse(a);

console.log(info5);

// dear.innerHTML=info5[0];
let hquestion=["What does HTML stand for?",
"Choose the correct HTML tag for the largest heading?",
"What are the different levels of headings in HTML?",
"Which tag would be used for a line break?",
"How can you make a list that lists the items with numbers?"
]

let correctanswer=[ "Hyper Text Markup Language", "H1", "1-6","Br", "Ol"];
let score=0;
function result(){

    for ( var i=0; i< correctanswer.length; i++){
        if(info5[i]==correctanswer[i]){
        
   score++;
   console.log("score is", score);
   if((score>2)){
        title.innerHTML=`<h1>Congratulations!! You Passed </h1><br><h2> ${score} / 5 Questions</h2> `; 
          title.style.color="green";
     }       
        else{
            title.innerHTML=`<h1> Hard Luck!! You Failed </h1><br><h2> ${score} / 5 Questions</h2>`;
            title.style.color="red";
        }
      
    }}}


result();

    document.getElementById("q1").innerHTML=hquestion[0];
    document.getElementById("q2").innerHTML=hquestion[1];
    document.getElementById("q3").innerHTML=hquestion[2];
    document.getElementById("q4").innerHTML=hquestion[3];
    document.getElementById("q5").innerHTML=hquestion[4];

    document.getElementById("yourAnswer1").innerHTML=info5[0];
    document.getElementById("yourAnswer2").innerHTML=info5[1];
    document.getElementById("yourAnswer3").innerHTML=info5[2];
    document.getElementById("yourAnswer4").innerHTML=info5[3];
    document.getElementById("yourAnswer5").innerHTML=info5[4];


    document.getElementById("CorrectAnswer1").innerHTML=correctanswer[0];
    document.getElementById("CorrectAnswer2").innerHTML=correctanswer[1];
    document.getElementById("CorrectAnswer3").innerHTML=correctanswer[2];
    document.getElementById("CorrectAnswer4").innerHTML=correctanswer[3];
    document.getElementById("CorrectAnswer5").innerHTML=correctanswer[4];


///////////////////////////////////////////////////////////////////////////////////////////
function show() {
    if(info5[0]==correctanswer[0]){
        document.getElementById("qa1").style.backgroundColor="#97DBAE";
    }else{
        document.getElementById("qa1").style.backgroundColor="#FC4F4F";
    }if(info5[1]==correctanswer[1]){
        document.getElementById("qa2").style.backgroundColor="#97DBAE";
    }else{
        document.getElementById("qa2").style.backgroundColor="#FC4F4F";
    } if(info5[2]==correctanswer[2]){
        document.getElementById("qa3").style.backgroundColor="#97DBAE";
    }else{
        document.getElementById("qa3").style.backgroundColor="#FC4F4F";
    } if(info5[3]==correctanswer[3]){
        document.getElementById("qa4").style.backgroundColor="#97DBAE";
    }else{
        document.getElementById("qa4").style.backgroundColor="#FC4F4F";
    } if(info5[4]==correctanswer[4]){
        document.getElementById("qa5").style.backgroundColor="#97DBAE";
    }else{
        document.getElementById("qa5").style.backgroundColor="#FC4F4F";
    }


    document.getElementById("hidden").style.display= "block";
}

