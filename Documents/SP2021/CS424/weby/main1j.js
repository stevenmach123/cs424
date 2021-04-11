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
console.log("--");

var Card = function(score){

    this.score = score; 
    var b = 12; 
    var color ="ye"; 
    this.hello =function(){
        return 10;
    }
}
Card.good = function(){
    var a =10;
    return [1+a,2,3];
}   

Card.game = [1,2]; 
var s = new Card(12);
console.log(Card.good());
console.log(s.hello()," ",s.game);

var ty= [];
var s1= new Card(11);
var s2 =new Card(13);
var s3 =new Card(15);
ty.push(s1);
ty.push(s2);
ty.push(s3);
var c = ty[1];
c.score=100;  
s2.score =200;
console.log(ty[1]);

var contain  = document.querySelector(".dem") ;
var a = document.createElement("div");
var at = document.createAttribute("his") 
a.setAttributeNode(at);
//a.setAttribute("his","one game");
//a.setAttribute("his","one");
contain.append(a); 
console.log(contain.firstElementChild);

var a,v =0 ;
console.log(v);

