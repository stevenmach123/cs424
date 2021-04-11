class Food{
    this.id  // **important: id of food to do querySelector 
    this.protein 
    this.sodium 
    this.sugar
    this.vitamin 
    this.calories // need, forget to add this in web 
}

class Days{ 
   constructor(key){
       this.key= key ;   // "month-day"
   }
   this.breakfast  = [Food1, Food2];  // you know
   this.lunch  
   this.dinner 
   function totalProtein(meal){
       total =0;
       for(i=0 -> meal.length){
           total += meal.protein  
       }
       return total 
   }
   function totalCalories(){}//...
   
   // Or can have this.totalProtein this.TotalSugar ... as instance, when copy back from #li1 #protein , #li2 #protein, #li3 #protein
}

arrDay=[] // collection of Days object  
var selectDay = null; 
var selectIndex = null ; 
store_list = {li1:[],li2: [],li3:[] }; // will continue update we add any foods, after get initial list of this.breakfast,this.lunch, this.dinner of Days 
                                       // store id is better 

function onload(){ 
   selectDay = new Days("3-8") // March 8 ,initial day
   arrDay.push(selectDay); 
   selectIndex =0 ;
} 

function lookUpIndex(key ){ 
   for(var i=0, i< arrDay.length,i++){
       if(key == arrDay[i].key){
           return i; 
       }
   }
   return -1; 
}



function triggerNewDay(){  // when click on a day in calendar 
   
   //-----
   need  update arrDay[selectIndex] with from querySelector("#li1 protein"), querySelector("#li1 amount_item"), // in case if have this.breakfast.totalProtein this.breakfast.TotalSugar  as instance
   also update arrDay[selectIndex].breakfast, .lunch, .dinner  with  "li1", "l2","l3" id array  of store_list; // in case store this.totalProtein ,this.TotalSugar,... no need compute total, so store id of foods is ok, since bring up a list just need id,  put_to_list(selector,item ),such item is id. 

   if want turn id into a food object : 
     let say "li1" key will correspond to arrDay[selectIndex].breakfast ;

       var list_id = store_lis["li1"];
       for(i =0 -> list_id.length  i++ ){
          var protein=  parseInt( querySelector("#"+list_id[i]+" "+"#protein"));
            parseInt(querySelector("#"+list_id[i]+" "+"#sugar"));
           parseInt(querySelector("#"+list_id[i]+" "+"#vitamin"));
           parseInt(querySelector("#"+list_id[i]+" "+"#sodium"));
           parseInt(querySelector("#"+list_id[i]+" "+"#calories"));
           arrDay[selectIndex].breakfast.push(new Food(protein,sodium, vitamin,sugar)); 
       }
     

   //----

   var month = querySelector("#calendar month")
   var day = querySelector("#calendar day")
   uni_key  = month.toString() + day.toString(); 
   var exist= lookUpIndex(key); 

   if(exist >= 0){
        selectDay = arrDay[exist];
        selectIndex = exist; 
      
   }
   else{
       selectDay = new Day(uni_key); 
       arrDay.push(selectDay); 
       selectIndex = arrDay.length -1; 
   }
   updateList(selectDay);  
}


function updateSelectorID(li,meal){
   store_list[li] = [];
   meal.forEach(function(index,food){
       store_list[li].push(food.id);
   }
   
   )
   
}


function updateList(selectDay){ 
   var li1 =  {protein: totalProtein(selectDay.breakfast),calories: totalCalo(selectDay.breakfast),...  } // or  {protein : this.breakfast.totalProtein,calories: this.breakfast.Calories} if it's instance  of each li1, li2 or li3
   var li2 =  {protein: totalProtein(selectDay.lunch),calories: totalCalo(selectDay.lunch),...  }//{protein : this.lunch.totalProtein,calories: this.lunch.Calories} 
   var li3  = { }
   var total_item_li1 = getAmount(selectDay.breakfast)
   var total_item_li2  = getAmount(selectDay.lunch)
   var total_item_li3 
   // finally update to #li1 , #li2 , #li3

   updateSelectorID("li1",selectDay.breakfast);
   updateSelectorID("li2",selectDay.lunch );
   updateSelectorID("li3",selectDay.dinner );
       
       
   
}