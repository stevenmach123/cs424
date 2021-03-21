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