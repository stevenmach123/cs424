
var c1 = document.querySelector(".menu1");
var c2 = document.querySelector(".menu2");
var ct1 =document.querySelector("#pm1 #lo1d");
var ct2 =document.querySelector("#lo2d");
var main_right = document.querySelector(".main_right");
var rbox1  = document.querySelector("#rbox1");
var tc =0;

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

var sec1 = document.querySelector("#rbox1 .info");
var sec2 =document.querySelector("#rbox1 .info2");
var sec3 =document.querySelector("#rbox1 .info3");
var sec4 =document.querySelector("#rbox1 .info4"); 
function t1(){
    sec1.style.display ="block";
    sec2.style.display ="none";
    sec3.style.display ="none";
    sec4.style.display ="none";

    disable_m2();
}

function t2(){
    sec1.style.display ="none";
    sec2.style.display ="block";
    sec3.style.display ="none";
    sec4.style.display ="none";
    disable_m2();

  
}
function t3(){
    sec1.style.display ="none";
    sec2.style.display ="none";
    sec3.style.display ="block";
    sec4.style.display ="none";
    disable_m2();
    
    
}
function t4(){
    sec1.style.display ="none";
    sec2.style.display ="none";
    sec3.style.display ="none";
    sec4.style.display ="block";
    disable_m2();
  
    
}

var sec21 = document.querySelector("#rbox2 .info");
var sec22 =document.querySelector("#rbox2 .info2");
var sec23 =document.querySelector("#rbox2 .info3");
var sec24 =document.querySelector("#rbox2 .info4"); 


function t2_1(){
    sec21.style.display ="block";
    sec22.style.display ="none";
    sec23.style.display ="none";
    sec24.style.display ="none";
    disable_m1();

    
}
function t2_2(){
    sec21.style.display ="none";
    sec22.style.display ="block";
    sec23.style.display ="none";
    sec24.style.display ="none";
    disable_m1();
    
}
function t2_3(){
    sec21.style.display ="none";
    sec22.style.display ="none";
    sec23.style.display ="block";
    sec24.style.display ="none";
    disable_m1();
    
}

function t2_4(){
    sec21.style.display ="none";
    sec22.style.display ="none";
    sec23.style.display ="none";
    sec24.style.display ="block";
    disable_m1();
    

}



function disable_m1(){
   sec1.style.display = "none" ; 
   sec2.style.display = "none" ; 
   sec3.style.display = "none" ; 
   sec4.style.display = "none" ; 
}
function disable_m2(){
    sec21.style.display = "none" ; 
    sec22.style.display = "none" ; 
    sec23.style.display = "none" ; 
    sec24.style.display = "none" ; 
} 
