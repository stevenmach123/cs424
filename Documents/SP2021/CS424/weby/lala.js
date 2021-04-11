document.addEventListener('click', event =)
<button id="1" onClick="reply_click(this.id)">B1</button>
isDescendant(event.target, parentId))
arr.indexOf(name)
$(window).click(function() {
    //Hide the menus if visible
    });

 $("p").toggle();
 <p>This is a paragraph.</p>
<button>Toggle between hide() and show()</button>

document. getElementsByTagName("body")[0];
formFieldInput[a].hasAttribute("name") && formFieldInput[a].attributes.title.value 
food_item.offsetWidth
getAttribute()
for (var a = 0;a<formFieldInput.length
   
while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
-webkit-animation: fadeIn 1s;
        animation: fadeIn 1s;

        const list = [ 'h', 'e', 'l', 'l', 'o'];
        list.map((currElement, index) => {
          console.log("The current iteration is: " + index);
          console.log("The current element is: " + currElement);
          console.log("\n");
          return currElement; //equivalent to list[index]
        });






<input type="button" value="Click me" onclick="msg()"></input>


Documents/SP2021/CS424/weby/main





store_list ={"li1":[],"li2":[],"li3":[]}; 
var list_count  = document.querySelector("#"+li_id +" "+"#num_item");

var exist = false;  
for(x in store_list){
    if(x  == li_id ){
        exist == true; 
    }
}
if(!exist){
    console.log("id no exist"); 
}

store_list[li_id].push(food.id);
list_count.textContent=  store_list[li_id].length; 

















var  l  = ["meat,vegi,soup"];
var kui = (this.id).split('_');
var item_list = document.querySelector(kui[1]+"_item"); 
item_list.style.visibility  = "visible"; 
l.forEach(function(key,index){
    if(key != kui[1]){
        var nol  = document.querySelector(kui[1]+"_item"); 
        nol.style.visibility  = "hidden"; 
    }
}

    
<div class="plan_day"> 
<div class= "tri2">
    <p >PROTEIN <ins>0</ins> kg</p>
    <p >SODIUM <ins>0</ins> kg</p>
</div>
<div> 
    <p style ="display:inline-block;margin-left:20%;">FAT <ins>0</ins> kg</p>
    <p style ="display:inline-block;margin-left:27.5%;">VITAMIN <ins>0</ins> kg</p>
</div>
<p style="margin-left:3%;" >TOTAL CALORIES: <ins>0</ins>  </p>
<p style ="margin-left:3%; display:inline-block"> TOTAL ITEMs: <ins>0</ins> </p>
</div > 


<div class="plan" id="li1" onclick ="see_list(this)" > 
          
    <p style="font-size:15px; text-align: center;">BREAKFAST</p> 

    <p  style="margin-left:20% ;display: inline-block" >ITEMs: <ins id="num_item" >0</ins></p> 
    <p  style="margin-left:20%;display: inline-block;" >CALORIES: <ins id="num_item" >0</ins></p>  
</div>










width :min-content;

.item_box{
    display:inline-block;  or without 
    width: min-content; or without 
    text-align: center;
    flex-flow: column;
    border: 1px solid orange;
    
}


var tar  = querySelector(".food_item");  
var cl = tar.closest(selectors);
 




class Meal {
    constructor() {
        this.foodList = [];
        this.calo = 0;
        this.items= 0; 
    }
    this.addFood = function(item_id){
        this.foodList.push(item_id); 
    }
    this.getFood = function(index){
        return this.foodList[index];
    }
    this.getCalories = function() {
        var total =0;
        for(var i=0; i< foodList.length; i++ ){
             var food_id =  foodList[i]; 
             total +=   parseFloat(document.querySelector("#"+food_id+" "+"#"+"calo").textContent); 
             
        }
        this.calo = total; 
        return this.calo ;
    }  
    this.getItems = function(){
        this.items =  foodList.length ;
        return this.items;
    }
     
   
}


class Days{ 
    constructor(key){
        this.key= key ;   // "month-day"
        this.breakfast  = new Meal(); 
        this.lunch = new Meal()
        this.dinner = new Meal(); 
        this.sum_protein = 0; 
        this.sum_fat = 0; 
        this.sum_sodium = 0;
        this.sum_vitamin =0; 
        this.sum_calo = 0;
        this.sum_item= 0;

    }
  

    
}

arrDay=[] // collection of Days object  
var selectDay = null; 
var selectIndex = null ; 
store_list = {li1:[],li2: [],li3:[] }; // will continue update we add any foods, after get initial list of this.breakfast,this.lunch, this.dinner of Days 
                                        // store id is better 

var selectDay = new Days("4-3-2021"); // March 8 ,initial day
arrDay.push(selectDay); 
selectIndex =0 ;

function lookUpIndex(key){ 
    for(var i=0; i< arrDay.length;i++){
        if(key == arrDay[i].key){
            return i; 
        }
    }
    return -1; 
}

function updateSelectorID(li,meal){
    store_list[li] = [];
    meal.forEach(function(index,food){
        store_list[li].push(food.id);
    }
    
    )
    
}
function updateMealInfo(li_id,obj_meal){
    document.querySelector("#"+li_id+" "+"#num_item") = obj_meal.getCalories();
    document.querySelector("#"+li_id +" "+"#calo")  = obj_meal,getItems();
    
}


function triggerNewDay(uni_key){  
    
    selectDay.sum_protein = parseFloat(day_protein.textContent); 
    selectDay.sum_sodium =  parseFloat(day_sodium.textContent).toFixed(1); 
    selectDay.sum_vitamin =  parseFloat(day_vitamin.textContent); 
    selectDay.sum_fat = parseFloat(day_fat.textContent);  
  
    selectDay.breakfast.foodList  = store_list["li1"];
    selectDay.lunch.foodList   =store_list["li2"];
    selectDay.dinner.foodList  = store_list["li3"];

   
    

    var exist= lookUpIndex(uni_key); 

    if(exist >= 0){
         selectDay = arrDay[exist];
         selectIndex = exist; 
       
    }
    else{
        selectDay = new Days(uni_key); 
        arrDay.push(selectDay); 
        selectIndex = arrDay.length -1; 
    }
    updateList(selectDay);  
}



function updateList(selectDay){ 
    
    day_protein.textContent  =selectDay.sum_protein; 
    day_sodium.textContent  = selectDay.sum_sodium; 
    day_vitamin.textContent = selectDay.sum_vitamin; 
    day_fat.textContent =selectDay.sum_fat; 
  
    
    updateMealInfo("li1",selectDay.breakfast); 
    updateMealInfo("li2",selectDay.lunch);
    updateMealInfo("li3",selectDay.dinner);
    
    updateSelectorID("li1",selectDay.breakfast.foodList);
    updateSelectorID("li2",selectDay.lunch.foodList );
    updateSelectorID("li3",selectDay.dinner.foodList );

    var total_items =  selectDay.breakfast.items  +  selectDay.lunch.items  +  selectDay.dinner.items ;
    var total_calo =  selectDay.breakfast.calo  +  selectDay.lunch.calo  +  selectDay.dinner.calo ;
    day_list_count.textContent =   total_items;
    day_calo.textContent = total_calo;

   
        
        
    
}


56
3.4-4 
77 
900 mg