function go_add(ev){
    var id = ev.id;
    var kui = id.split('_');
    var ob = '#' + kui[1];
    
  var food = document.querySelector(ob);
  food.style.borderColor = "red";
  var selector =  document.querySelector("#select_item");
  
  var box_item= document.createElement("div"); 
  box_item.classList.add("item_box");
  var sti_img = document.createElement("IMG"); 
  var sti_name = document.createTextNode("");

  var chi = food.firstElementChild ;
  var chi_name =  chi.nextElementSibling; 

  sti_name.textContent =chi_name.innerHTML 
  console.log("name ",chi_name.innerHTML);
  sti_img.src =chi.src; 
  sti_img.style.height = "180px";
  sti_img.style.width ="300px";
  box_item.append(sti_img,sti_name);
  /* console.log(food.firstElementChild.id);
  console.log(chi.nextElementSibling.id) ;
  sti_img.src = food[0];    */
  selector.append(box_item); 

}


function go_delete(ev){
   
    var kui = (ev.id).split('_');
    var a  = document.querySelector("#popup_"+kui[1]);
    a.style.visibility ="hidden";
    a.classList.remove("show"); 
}; 


function go_detail(ev){
    var id = ev.id;
    var kui = id.split('_');
 

    var pop  = document.querySelector("#popup_"+kui[1]);
    var pop_img = pop.firstElementChild;
   
    pop_img.style.width = "300px";
    pop_img.style.height = "200px";
    
    var food_item = document.querySelector(".food_item"); 
   
    pop.style.width =  (food_item.offsetWidth).toString()+"px";
    
    if(pop.style.visibility == "hidden" || pop.style.visibility==""){
        console.log("in hidden");
        pop.style.visibility ="visible";
        pop.classList.add("show"); 

     
    }
    
   
   
    //console.log(pop_content.children.length);
    //console.log(pop_content.children[1].id);
  

    
}

var pa = document.querySelector(".food_item").children;
console.log(pa[0].id);
console.log(pa[1].id);





















/* 
 1.show
 2. no show 
 
 1.no show
 2.show -- no have show()
*/

/*
$("#px").toggle(function(){
    console.log("sdsd");
    a.classList.add("show");
    a.textContent = "hellow" //overwrite
    
    console.log(a.classList.length);
}

);       */

/*
console.log(pop_content.firstElementChild.id);
var co  = pop_content.firstElementChild; 
var co1 = co.nextElementSibling;
console.log(co1.id);

child = pop_content.children.length // give 1, is pic 

 pop_content.childNodes.length // is 2, such  pic, content

 var first  =pop_content.firstChild // work
    var s = first.nextSibling;
    console.log(s.id);


var first  =pop_content.firstElementChild // not work
    var s = first.nextElementSibling;
    console.log(s.id);

*/