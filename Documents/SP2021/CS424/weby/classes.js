var months = ["january","february","march","april","may","june","july","august","september","october","november","december"];

// Food class
class Food{
    constructor(){
        this.id = null;
        this.name = "";
        this.carb = 0;
        this.sodium = 0;
        this.fat = 0;
        this.calories = 0;
    }
}

// meal for a day, aka, breakfast, lunch, dinner
class Meal {
    constructor() {
        this.foodList = [];
    }

    // add food to the list
    addFood(food){
        // create new instance of Food
        var newFood = new Food();

        // copy data over
        newFood.id = food.id;
        newFood.name = food.name;
        newFood.fat = food.fat;
        newFood.calories = food.calories;
        newFood.carb = food.carb;
        newFood.sodium = food.sodium;

        // push new food to the list
        this.foodList.push(newFood);
    }

    // get food at index
    getFoodByIndex(index){
        return this.foodList[index];
    }

    // get food by name
    getFoodByName(name){
        for(var i = 0; i < this.foodList.length; i++){
            if(name == this.foodList[i].name){
                return this.foodList[i];
            }
        }
        return null;
    }

    // remove food by name
    removeFoodByName(name){
        var index = -1;

        // get the index of the item to be deleted
        // by searching for the same name as given 
        for(var i = 0; i < this.foodList.length; i++){
            if(name == this.foodList[i].name){
                index = i;
                break;
            }
        }

        // if the index is valid, remove the item
        if(index != -1){   
            this.foodList.splice(index);
        }
    }

    // calculate total fat of all food in list
    totalFat(){
        var total = 0;
        this.foodList.forEach(food => {
            total += food.fat;
        });

        return total;
    }

    // calculate total sodium of all food in list
    totalSodium(){
        var total = 0;
        this.foodList.forEach(food => {
            total += food.sodium;
        });

        return total;
    }

    // calculate total carbohydrate of all food in list
    totalCarb(){
        var total = 0;
        this.foodList.forEach(food => {
            total += food.carb;
        });

        return total;
    }

    // calculate total calories of all food in list
    totalCalories(){
        var total = 0;
        this.foodList.forEach(food => {
            total += food.calories;
        });

        return total;
    }
}

// plan for each day
class Plan {
    constructor(){
        this.date = ""; // month-day-year string format
        this.breakfast = new Meal();
        this.lunch = new Meal();
        this.dinner = new Meal();
    }
}


// for later when woking on multiple lists
class PlanList{
    constructor(){
        this.planList = [];
    }
}

// to easy save and retrieve the date
class Date {
    constructor(){
        this.month = 1;
        this.day = 1;
        this.year = 2021;
    }

    // translate month's name to number
    monthNameToNumber(monthName){
        // var months = {
        //     "january" : 1,
        //     "february" : 2,
        //     "march" : 3,
        //     "april" : 4,
        //     "may" : 5,
        //     "june" : 6,
        //     "july" : 7,
        //     "august" : 8,
        //     "september" : 9,
        //     "october" : 10,
        //     "november" : 11,
        //     "december" : 12,
        // };

        return months.indexOf(monthName.toLowerCase()) + 1;
    }

    // get the string of format "month-day-year"
    getDate(){
        return this.month.toString() + "-" + this.day.toString() + "-" + this.year.toString(); 
    }
}