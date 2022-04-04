'use strict'
const regisform = document.getElementById("regForm");
let fname = document.getElementById("fname"); 
let lname = document.getElementById("lname"); 
let email = document.getElementById("email"); 
let pass   = document.getElementById("pass"); 
let conpass = document.getElementById("conpass");
let fnameMsg=document.getElementById("ufname");
let lnameMsg=document.getElementById("ulname");
let mailMsg=document.getElementById("umail");
let psMsg=document.getElementById("ups1");
let ps2Msg=document.getElementById("ups2");
let posision  = document.getElementById("posision"); 


let info=[];

function LocalStorageFrom(){
    let ureg=JSON.stringify(info);
    localStorage.setItem('Data',ureg); 
    // console.log(ureg);
}
// /*************************************************************** */
function usrreg(fname, lname,email, password, spassword, posision){
    this.fname=fname;
    this.lname=lname;
    this.email=email;
    this.password=password;
    this.spassword=spassword;
    this.posision=posision;
    this.ufname=ufname(fname);
    this.ulname=ulname(lname);
    this.mail=mail(email);
    this.checkPassword=checkPassword(password,spassword);
   

    // console.log(fname, lname,email, pass, conpass);
    // startReg()
    info.push(fname, lname,email, password, spassword,posision)
    LocalStorageFrom();
    // console.log(userreg);
    
    }
    /************************************************/
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
        fnameMsg.textContent=" required only characters";
    }}


/****************************/ 
function ulname(lname){
    let out1;
    // var regName = /^[A-Za-z]+$/;        // for user name
    if(regName.test(lname)){
        console.log('correct last');
        out1=lname;
        return out1;
       }
    else {
        lnameMsg.textContent=" required only characters";
    }}
/**********************/ 
function mail(email){
    let out3;
 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; // for email
    if(filter.test(email)){
        console.log('correct @');
        out3=email;
        return out3;
       }
    else {
        mailMsg.textContent="Invalid email given, missing @";
    }}
/*************************** */
/*To check from password */
function checkPassword(password,spassword){
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=(.*[\d]){2,})[A-Za-z\d?]{8,32}$/;
    let num=/[\d]{2,}/;
    let capital=/[A-Z]/;
    let symboles=/[#$@!%&*?]/;
    if ((regex.test(password))){ //To check from 2 passwords syntax
        console.log('password syntax is Incorrect');
        psMsg.textContent= 'password syntax is Incorrect';
    }
    else if((!capital.test(password[0]))){ //To check from the first letter
        console.log("Incorrect! password must be capital");
        psMsg.textContent= 'Incorrect! password must be capital.';
    }
    else if((!num.test(password))){
        console.log('You password must contain 2 numbers at least');
         psMsg.textContent= 'You password must contain 2 numbers at least';
    }
    else if((!symboles.test(password))){
        console.log('You password must contain  at least 1 symbole');
         psMsg.textContent= 'You password must contain  at least 1 symbole';
    }else if (!(password.length>=8 && password.length<=20)){
        psMsg.textContent= 'You password must at min 8 and max 20';
    }
    else if ((password===spassword)){
        console.log('Your registration is Complete ');  
        ps2Msg.textContent= `Your registration is Complete`;
    }else{
        ps2Msg.textContent= `Passwords don't match`;
    }
}
/********************************** */
regisform.addEventListener("submit", checkeddata);
function checkeddata(event) {
event.preventDefault();

let fname = event.target.fname.value;
let lname = event.target.lname.value;
let email = event.target.email.value;
let password = event.target.pass.value;
let spassword = event.target.conpass.value;
let posision = event.target.posision.value;
console.log(fname);
console.log(lname);
console.log(email);
console.log(password);
console.log(spassword);
console.log(posision);

// Redirecting to login page.
new usrreg(fname, lname,email, password, spassword, posision);

// console.log(usrreg);
}  

checkeddata();
window.location = "/masterMinds_OTA/pages/login.html"

// /**********************************************************  */


// function storeInLocalStorage() {
//  let stringArray = JSON.stringify(info);
//  localStorage.setItem("data", stringArray);
// }

// function callFromLocalStorage() {
//  let dataObj = localStorage.getItem("data");
//  let infoArr = JSON.parse(dataObj);
// }



// callFromLocalStorage();







/****************************/
