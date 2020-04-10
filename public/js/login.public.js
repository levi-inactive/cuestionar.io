document.addEventListener('DOMContentLoaded', function(event) {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    var btnLogin = document.getElementById("btnLogin");


    /*btnLogin.addEventListener('click', function() {
        console.log("Click en btnLogin");
        var username = usernameInput.value;
        var password = passwordInput.value;
        var credentials = {
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
    */
})