"use strict";


let start=document.getElementById("start");
let dear= document.getElementById("dear");



let y=localStorage.getItem("Data");
let info3=JSON.parse(y);

dear.innerHTML=info3[0];

function quiztype(){


    if (info3[5]=="HTML"){

        window.location="../Quiz/html/index.html";

    }

    else if (info3[5]=="CSS"){

        window.location="../Quiz/css/index.html";


    }

    else if (info3[5]=="JS"){

        window.location="../Quiz/javascript/index.html";


    }

    




}



