"use strict";

let uname=document.getElementById("uname");
let passwo=document.getElementById("passwo");

function checkDate(){
    let x=localStorage.getItem("Data");
    let info2=JSON.parse(x);

    if ((uname.value ==info2[0])&&(passwo.value == info2[3])) {

        // alert("sucs");
        window.location="../Welcome/index.html";
    
    }
    
    else {
  
        alert("wrong");
    
    }

}
