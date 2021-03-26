
class UserInfo {
    constructor(){
        this.email = null;
        this.username = null;
        this.password = null;
        this.age = null;
        this.height = null;
        this.weight = null;
        this.fitnessGoal = null;
        this.vegan = false;
        this.tips = false;
    }
};

// variables
var userInfo;

function init(){
    document.getElementById("introBtn").addEventListener("click", moveToLogin);
    //document.getElementById("loginBtn").addEventListener("click", moveToRegister);

    userInfo = new UserInfo();
}

function moveToLogin(){
    document.getElementById("frame").innerHTML = getLoginPage();
}

function moveToRegister(){
    document.getElementById("frame").innerHTML = getRegisterPage();
}

function moveToArticle(){
    document.getElementById("frame").innerHTML = getArticlePage();
}

function getUserInfo(){
    userInfo.email = document.getElementById('email').value;
    userInfo.username = document.getElementById('username').value;
    userInfo.password = document.getElementById('password').value;
    console.log(userInfo.username + "-" + userInfo.password);
    userInfo.age = document.getElementById('age').value;
    userInfo.height = document.getElementById('height').value;
    userInfo.weight = document.getElementById('weight').value;
    userInfo.fitnessGoal = document.getElementById('fitnessGoal').value;
    userInfo.vegan = document.getElementById('email').checked;
    userInfo.tips = document.getElementById('email').checked;

    moveToLogin();
}

function checkLoginCredentials(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(userInfo.username + "-" + userInfo.password);
    if(username == userInfo.username && password == userInfo.password){
        moveToArticle();
    }
}


