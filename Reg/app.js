"use strict";

let signupform=document.getElementById("signupform");
let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let email=document.getElementById("email");
let pasw=document.getElementById("pasw");
let conpasw=document.getElementById("conpasw");
let Position=document.getElementById("Position");
let first=document.getElementById("first");
let last=document.getElementById("last");
let mail=document.getElementById("mail");
let pass=document.getElementById("pass");
let passcon=document.getElementById("passcon");
let info=[];


/////////////////////////////////////////////////////

function storageform(){

    let Jform = JSON.stringify(info);
    localStorage.setItem("Data",Jform);

}














//////////////////////////////////////////////////////////


function regform( fname,lname,email,pasw,conpasw,Position){

    this.fname=fname;
    this.lname=lname;
    this.email=email;
    this.pasw=pasw;
    this.conpasw=conpasw;
    this.Position=Position;
    this.ufname=ufname(fname);
    this.ulname=ulname(lname);
    this.mailll=mailll(email);
    this.checkPassword=checkPassword(pasw,conpasw);

    info.push(fname,lname,email,pasw,conpasw,Position);
    storageform();
    console.log(regform);
}


/////////////////////////////////////////////////////////////
// var nameRegex = /^[a-zA-Z\-]+$/;

// function ufname(fname){
//     if(nameRegex.test(fname)){
//         console.log("correct firstname");
//         return fname;
        
//     }
//     else { 
//         first.textContent="required only character";
        
//     }


// }

var regName = /^[A-Za-z]+$/; 

function ufname(fname){
    let out;
    // var regName = /^[A-Za-z]+$/;        // for user name
    if(regName.test(fname)){
        console.log('correct fisrt');
        out=fname;
        return out;
       }
    else {
        first.textContent=" required only characters";
    }}

/////////////////////////////////////////////////////////////

function ulname(lname){
    let out1;
    // var regName = /^[A-Za-z]+$/;        // for user name
    if(regName.test(lname)){
        console.log('correct last');
        out1=lname;
        return out1;
       }
    else {
        last.textContent=" required only characters";
    }}

/////////////////////////////////////////////////////////
    function mailll(email){
        let out3;
     var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/; // for email
        if(filter.test(email)){
            console.log('correct @');
            out3=email;
            return out3;
           }
        else {
            mailll.textContent="Invalid email given, missing @";
        }}

///////////////////////////////////////////////////////

/*To check from password */
function checkPassword(pasw,conpasw){
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=(.*[\d]){2,})[A-Za-z\d?]{8,32}$/;
    let num=/[\d]{2,}/;
    let capital=/[A-Z]/;
    let symboles=/[#$@!%&*?]/;
    if ((regex.test(pasw))){ //To check from 2 passwords syntax
        console.log('password syntax is Incorrect');
        pass.textContent= 'password syntax is Incorrect';
    }
    else if((!capital.test(pasw[0]))){ //To check from the first letter
        console.log("Incorrect! password must be capital");
        pass.textContent= 'Incorrect! password must be capital.';
    }

    else if((!num.test(pasw))){
        console.log('You password must contain 2 numbers at least');
        pass.textContent= 'You password must contain 2 numbers at least';
    }
    else if((!symboles.test(pasw))){
        console.log('You password must contain  at least 1 symbole');
        pass.textContent= 'You password must contain  at least 1 symbole';
    }else if (!(pasw.length>=8 && pasw.length<=20)){
        pass.textContent= 'You password must at min 8 and max 20';
    }
    else if ((pasw===conpasw)){
        console.log('Your registration is Complete ');  
        // ps2Msg.textContent= `Your registration is Complete`;
        alert(`Your registration is Complete`);
        window.location = "../Login/index.html"
    }else{
        passcon.textContent= `Passwords don't match`;
    }
}









////////////////////////////////////////////////////////
signupform.addEventListener("submit", checkeddata);
function checkeddata(event) {
event.preventDefault();

let fname = event.target.fname.value;
let lname = event.target.lname.value;
let email = event.target.email.value;
let pasw = event.target.pasw.value;
let conpasw = event.target.conpasw.value;
let Position = event.target.Position.value;
console.log(fname);
console.log(lname);
console.log(email);
console.log(pasw);
console.log(conpasw);
console.log(Position);

new regform(fname, lname,email, pasw, conpasw, Position);
}

checkeddata();