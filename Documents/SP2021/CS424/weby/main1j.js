var c = document.querySelector(".dop1");
var c_dropcon =document.querySelector(".dop1-con"); 

c.onclick = function(){
    if(c_dropcon.style.display!="none"){
        c_dropcon.style.display = "none"; 
    }
    else{
        c_dropcon.style.display = "block"; 
    }
}


var parent1 = document.querySelector(".cop3").parentNode;
parent1.classList.add("bord1"); 

var p2_1 = document.querySelector("#dop2_1 .cop2");


var p2_2 = p2_1.nextElementSibling; 
console.log(p2_2.className); 
var p2_3 = p2_2.nextElementSibling; 
console.log(p2_3.innerHTML); 
var p2_4 = p2_3.nextElementSibling; 
console.log(p2_4.innerHTML);   


class engine{
    constructor(s){
        this.name =s
        
    }
    
}

class car{
    constructor(day,s ){
       this.day = day
       this.s =s +10
       
    }
    do(){
        console.log("hello")
        let fire =new engine("sop")
        this.fire =fire 
        return this.s 
    }
    
}
class model extends car{
    constructor(day,s,power){
        super(day,s)
        this.power = power
    }   
    
}

let fy = new model(1,"s",3)
fy.do()
console.log(fy.fire.name)

let d = {"position":[], "at":[] }

d["position"]= [1,2,3]
d["at"] = [1,2]
console.log(d)