(function () {
    var registerBtn = jQuery('#registerBtn');
    var usernameFld = $('#username');
    var passwordFld = $('#password');
    var password2Fld = $('#password2');

    registerBtn.click(registerHandler);

    function registerHandler() {
        var usernameStr = usernameFld.val();
        var passwordStr = passwordFld.val();
        var password2Str = password2Fld.val();

        var userObj = {
            username: usernameStr,
            password: passwordStr
        };

        var userObjStr = JSON.stringify(userObj);

        fetch('/register', {
            method: 'post',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(registrationSuccessful, registrationFailed); 
        // fetch is a-synchronized: thread is not blocked waiting for the AJAX call to finished, so the browser handles multi-threading work
    }
    
    function registrationSuccessful() {
    	alert('!YAY!');
    	window.location.href = '/profile.template.client.html';
    }
    
    function registrationFailed() {
    	alert('OOPS');
    } 
})();
