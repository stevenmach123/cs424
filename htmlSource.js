class PageSource {
    constructor(){
        this.login = `
            <div id="login">
                <h3>Log in</h3>
                <table id="loginTable">
                    <tr>
                        <td>Username</td>
                        <td><input type="text"></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password"></td>
                    </tr>
                </table>
                <a href="article.html">
                    <button id="loginBtn">Log in</button>
                </a>
                <p>Don't have account? <a href="register.html">Register</a></p>                                                                                                                     
            </div>
        `;
    }
};

function getLoginPage(){
    return `
        <div id="login">
            <h3>Log in</h3>
            <table id="loginTable">
                <tr>
                    <td>Username</td>
                    <td><input type="text" id="username"></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" id="password"></td>
                </tr>
            </table>
            <button id="loginBtn" onclick="checkLoginCredentials()">Log in</button>
            <p>Don't have account? <button onclick="moveToRegister()">Register</label></p>                                                                                                                     
        </div>
    `;
}

function getRegisterPage(){
    return `
        <div id="register">
            <h3>Register Here</h3>
            <table id="registerTable">
                <tr>
                    <td>Email</td>
                    <td ><input type="text" id="email"></td>
                </tr>
                <tr>
                    <td>Username</td>
                    <td ><input type="text" id="username"></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td ><input type="password" id="password"></td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td ><input type="text" id="age"></td>
                </tr>
                <tr>
                    <td>Height</td>
                    <td ><input type="text" id="height"></td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td><input type="text"  id = weight></td>
                </tr>
                <tr>
                    <td>Fitness Goal</td>
                    <td><input type="text" id="fitnessGoal"></td>
                </tr>
            </table>
            
            <div id="registerCheckboxes">
                <input type="checkbox" id="veganCheckbox" value="vegan">
                <label>Vegan</label><br>
                <input type="checkbox" id="tipsCheckbox" value="tips">
                <label>Receive healthy eating tips via emails</label><br>
            </div>
            
            <div style="text-align: center;">
                <button id="registerBtn" onclick="getUserInfo()">Register</button>
            </div>
            
        </div>
    `;
}

function getArticlePage(){
    return `
        <div id="info">
        <label>GOOD MEALS</label><br>
        <label>Image</label><br>
        <label>Information</label>
        </div>

        <div id="navigationBar">
            <button class="navSelection">Article</button>
            <button class="navSelection">Schedule</button>
        </div>

        <div id="title">
            title
        </div>

        <div id="foodOptions">
            foodOptions
        </div>

        <div id="calendar">
                <p>calendar</p>
        </div>

        <div id="lists">
            lists
        </div>
    `;
}
