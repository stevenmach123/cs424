
var c1 = document.querySelector(".menu1");
var c2 = document.querySelector(".menu2");
var ct1 =document.querySelector("#lo1d");
var ct2 =document.querySelector("#lo2d");

c1.onclick = function(){
   if(ct1.style.display == "none"){
     ct1.style.display ="block";
   }
   else{
    ct1.style.display ="none";
   }
}

c2.onclick = function(){
    if(ct2.style.display == "none"){
        ct2.style.display ="block";
      }
      else{
       ct2.style.display ="none";
      }
}
var sec1 = document.querySelector(".info");
var sec2 =document.querySelector(".info2");
var sec3 =document.querySelector(".info3");
var sec4 =document.querySelector(".info4"); 
function t1(){
    sec1.style.display ="block";
    sec2.style.display ="none";
    sec3.style.display ="none";
    sec4.style.display ="none";
}

function t2(){
    sec1.style.display ="none";
    sec2.style.display ="block";
    sec3.style.display ="none";
    sec4.style.display ="none";
}
function t3(){
    sec1.style.display ="none";
    sec2.style.display ="none";
    sec3.style.display ="block";
    sec4.style.display ="none";
}
function t4(){
    sec1.style.display ="none";
    sec2.style.display ="none";
    sec3.style.display ="none";
    sec4.style.display ="block";
}

