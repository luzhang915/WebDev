(function () {
    function init() {
        findAllUsers()
            .then(renderUsers);
    }
    init();
    
    function findAllUsers() {
        var url = "/api/user";
        return fetch(url)
            .then(function (response) {
                return response.json();
            });
    }
    
    function renderUsers(users) {
        console.log(users);
    }
})();