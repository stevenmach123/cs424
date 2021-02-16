var c = document.querySelector(".dop1");
var c_dropcon =document.querySelector(".dop1-con"); 

c.onclick = function(){
    if(c_dropcon.style.display!="none"){
        c_dropcon.style.display = "none"; 
    }
    else{
        c_dropcon.style.display = "normal"; 
    }
}
