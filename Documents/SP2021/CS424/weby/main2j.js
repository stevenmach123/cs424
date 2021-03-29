
var food ; 
var store_list =[];
var store_item  =[]; 

function get_unique(id){
    var kui = id.split('_');
    
    var true_id = "";
    for(var i =1; i < kui.length; i++ ){
        if(i == kui.length-1){
            true_id = true_id + kui[i]; 
        }
        else{
         true_id = true_id + kui[i]+"_"; 
        }
    }
    return true_id;
}

function deleteAll(container){
    console.log(container.childNodes.length); 
    var count = container.childNodes.length;
    while(container.firstChild  ){
        console.log(container.firstChild);   
        container.removeChild(container.firstChild); 
       
    }
}


function go_add(ev){
    var true_id = get_unique(ev.id);

    
  food = document.querySelector("#"+true_id);
  food.style.borderColor = "red";
  
  var op_list = document.querySelector("#popup_option_list");
  op_list.style.visibility ="visible"; 

  var food_item = document.querySelector(".food_item"); 
  console.log(food_item.offsetWidth);
  op_list.style.width =  (food_item.offsetWidth*0.90).toString()+"px";

    
  op_list.classList.add("show"); 
  

}


function to_list(ev){
    var li_id = "li"+ ev.id 
    var list_count  = document.querySelector("#"+li_id +" "+"#num_item");
    console.log("# ",list_count);
    if( store_list.indexOf(li_id) >= 0){
    
        store_item[store_list.indexOf(li_id)].push(food.id); 
        list_count.textContent =  parseInt(list_count.textContent)+ 1;
    }
    else{
        store_list.push(li_id);
        store_item.push([food.id]); 
        list_count.textContent = 1; 
    }
    var op_list = document.querySelector("#popup_option_list");
    op_list.style.visibility  = "hidden"; 
    op_list.classList.remove("show");
     

    /*
    console.log("op ",option);
    var my_list = document.querySelector(".center_list "+"#"+"li"+option); 
    console.log(my_list); 
    if(option ==1){
        put_to_list(my_list); 
    }
    else {
        put_to_list(my_list);
    }   */
}



function see_list(ev){ 
    var collection = document.querySelector("#popup_collection #collection");
    var outer_collection = document.querySelector("#popup_collection");
   deleteAll(collection);
    if(store_list.indexOf(ev.id) >= 0){    
        var ind = store_list.indexOf(ev.id)  ;
        var items_list = store_item[ind]; 
        for(var i=0; i<items_list.length;i++){ 
            put_to_list(collection,items_list[i] );
        }


    }
    var food_item = document.querySelector(".food_item");
    outer_collection.style.width  =  (food_item.offsetWidth*0.90).toString()+"px";
 
    outer_collection.style.visibility ="visible";
    outer_collection.classList.add("show");
  
   
} 

function put_to_list(selector,item ){


    var food = document.querySelector("#"+item); 
  
    var box_item= document.createElement("div"); 
    box_item.classList.add("item_box");
  
    var sti_img = document.createElement("IMG"); 
    var sti_name = document.createTextNode("");
  
    var chi = food.firstElementChild ;
    var chi_name =  chi.nextElementSibling; 
  
    sti_name.textContent =chi_name.innerHTML ;
    console.log("name ",chi_name.innerHTML);
    sti_img.src =chi.src; 
    sti_img.style.height = "110px";
    sti_img.style.width ="160px";
    box_item.append(sti_img,sti_name);    
  
  
     selector.append(box_item); 
  }






/*
function put_to_list(selector){
 
  
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
  sti_img.src = food[0];    

   selector.append(box_item); 
}  */




function go_delete(ev){
   
    var true_id = get_unique(ev.id);
    console.log("del ",true_id);

    var a  = document.querySelector("#popup_"+true_id);
    a.style.visibility ="hidden";
    a.classList.remove("show"); 
}; 


function go_detail(ev){
    var true_id = get_unique(ev.id);
    

    var pop  = document.querySelector("#popup_"+true_id );
    var pop_img = pop.firstElementChild;
   
    pop_img.style.width = "140px";
    pop_img.style.height = "80px";
    
    var food_item = document.querySelector(".food_item"); 
   
    pop.style.width =  (food_item.offsetWidth).toString()+"px";
    
    if(pop.style.visibility == "hidden" || pop.style.visibility==""){
        console.log("in hidden");
        pop.style.visibility ="visible";
        pop.classList.add("show"); 

     
    }
    
}

document.querySelector("#meat_item").style.visibility ="visible";
function bring_list(ev){
    var id = ev.id;
    var  l  = ["meat","vegi","soup"];
   // console.log(ev.id);
    var kui = id.split('_');
    var item_list = document.querySelector("#"+kui[1]+"_item"); 
    item_list.style.visibility  = "visible"; 
    l.forEach(function(key,index){
       // console.log("[ ",key);
        if(key != kui[1]){
            var nol  = document.querySelector("#"+key+"_item"); 
          //  console.log("-",nol.id);
            nol.style.visibility  = "hidden"; 
        }
    });
    document.querySelector("#type_title").textContent = kui[1].toUpperCase();
    
}


console.log("start game");


//
// ***************************Start Nguyen Hoa's code *******************
//
window.onload = function(){
    addCalendarEventListener();
}

// add event listeners to calendar
function addCalendarEventListener(){
    var daysList = document.getElementsByClassName("daysList button");
    
    $(".daysList li button").on("click", onDayClick);
}

function onDayClick(){
    var date = new Date();

    // get the date
    date.day = parseInt(this.innerHTML);
    date.month = date.monthNameToNumber(document.querySelector("#month").innerHTML);
    date.year = parseInt(document.querySelector("#year").innerHTML);
    alert(date.getDate());

    this.style.backgroundColor = "aqua";
    
}


//
// ***************************End Nguyen Hoa's code *******************
//


















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

var pa = document.querySelector(".meat_item").children;
console.log(pa[0].id);
console.log(pa[1].id); 

child = pop_content.children.length // give 1, is pic 

 pop_content.childNodes.length // is 2, such  pic, content

 var first  =pop_content.firstChild // work
    var s = first.nextSibling;
    console.log(s.id);


var first  =pop_content.firstElementChild // not work
    var s = first.nextElementSibling;
    console.log(s.id);

*/
