// console.log("login");

const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function(){

    // 1. get the username
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value;
    console.log(username);

    // 2. get the password
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
    console.log(password);

    // 3. username and password validation
    if(username === "admin" && password === "admin123"){
        alert("login Successfully");

        window.location.replace("./home.html")
    }
    else{
        alert("login failed")
    }

})