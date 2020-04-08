document.addEventListener('DOMContentLoaded', function(event) {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    var btnLogin = document.getElementById("btnLogin");


    btnLogin.addEventListener('click', function() {
        var username = usernameInput.value;
        console.log("Click en btnLogin");
        var password = passwordInput.value;
        var myBody = {
            username:username,
            password:password
        }

        var reqHeaders = new Headers();
        var config = {
            method: 'POST',
            headers: reqHeaders,
            mode: 'cors',
            cache: 'default',
            body: myBody
        };
        
        fetch('http://localhost:8080/login', config)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            console.log(json);
        });
    })
})