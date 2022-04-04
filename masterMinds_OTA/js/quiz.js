// 'use strict';

// const quiz_box = document.getElementById("quiz");
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
//           window.location="../pages/show.html"

//       }
//   }, 1000);
// }

// window.onload = function () {
//   var minutesOfFive = 10*1,
//       view_date = document.querySelector('#time');
   
//   startTimer(minutesOfFive, view_date);
// };
///////////////////////////////////////////Next Button///////////////////////////////////////////////

var box=document.getElementById("box");
var i=1;

function nextq(){
if (i==4){
  document.getElementById("next").disabled=true;
  showQuetions(que_count);
  
}
else if(i==5) {
document.getElementById("next").textContent="submit";

}


else {
  i++;
  return setnumber()
}

}

function setnumber() {
  return box.innerHTML=i +" "+`of 5 Questiones`;
}



// // getting questions and options from array
// function showQuetions(index){
//   const que_text = document.querySelector(".que_text");

//   //creating a new span and div tag for question and option and passing the value using array index
//   let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
//   let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
//   + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
//   + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
//   + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
//   que_text.innerHTML = que_tag; //adding new span tag inside que_tag
//   option_list.innerHTML = option_tag; //adding new div tag inside option_tag
  
//   const option = option_list.querySelectorAll(".option");
//   // set onclick attribute to all available options
//   for(i=0; i < option.length; i++){
//       option[i].setAttribute("onclick", "optionSelected(this)");
//   }
// }


// //if user clicked on option
// function optionSelected(answer){
//   clearInterval(counter); //clear counter
//   clearInterval(counterLine); //clear counterLine
//   let userAns = answer.textContent; //getting user selected option
//   let correcAns = questions[que_count].answer; //getting correct answer from array
//   const allOptions = option_list.children.length; //getting all option items
  
//   if(userAns == correcAns){ //if user selected option is equal to array's correct answer
//       userScore += 1; //upgrading score value with 1
//       answer.classList.add("correct"); //adding green color to correct selected option
//       answer.insertAdjacentHTML("beforeend"); //adding tick icon to correct selected option
//       console.log("Correct Answer");
//       console.log("Your correct answers = " + userScore);
//   }else{
//       answer.classList.add("incorrect"); //adding red color to correct selected option
//       answer.insertAdjacentHTML("beforeend"); //adding cross icon to correct selected option
//       console.log("Wrong Answer");

//       for(i=0; i < allOptions; i++){
//           if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
//               option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
//               option_list.children[i].insertAdjacentHTML("beforeend"); //adding tick icon to matched option
//               console.log("Auto selected correct answer.");
//           }
//       }
//   }
//   for(i=0; i < allOptions; i++){
//       option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
//   }
//   next_btn.classList.add("show"); //show the next button if user selected any option
// }