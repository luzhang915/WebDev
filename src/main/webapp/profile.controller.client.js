(function () {

    var $username, $firstname, $lastname,
        $updateBtn;
    var currentUser = null;

    function init() {
        $username = $("#username");
        $firstname = $('#firstname');
        $lastname = $('#lastname');
        $updateBtn = $('#updateBtn');

        $updateBtn.click(updateUser);

        profile()
            .then(renderUser);
    }

    init();

    function renderUser(user) {
        currentUser = user;
        $username.val(user.username);
        $firstname.val(user.firstname);
        $lastname.val(user.lastname);
    }

    function updateUser() {
        var user = {
            firstname: $firstname.val(),
            lastname: $lastname.val()
        }

        fetch("/api/user/" + currentUser.id, {
            method: 'put',
            body: JSON.stringify(user),
            'credentials': 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    function profile() {
        return fetch("/profile", {
            'credentials': 'include'
        })
            .then(function (response) {
                return response.json();
            });
    }

    function findUserById(userId) {
        return fetch('/api/user/' + userId)
            .then(function (response) {
                return response.json();
            });
    }

})();