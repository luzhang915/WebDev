(function () {

    var userServiceClient = new UserServiceClient();

    function init() {
        userServiceClient
            .findAllUsers()
            .then(renderUsers);
    }
    init();
    
    function renderUsers(users) {
        var tbody = $('tbody');
        tbody.empty();
        for (var i=0; i<users.length; i++) {
            var user = users[i];

            var tr = $('<tr>');
            var td = $('<td>');
            td.append(user.username);
            tr.append(td);

            td = $('<td>');
            td.append(user.password);
            tr.append(td);

            td = $('<td>');
            td.append(user.firstname);
            tr.append(td);

            td = $('<td>');
            td.append(user.lastname);
            tr.append(td);

            td = $('<td>');
            td.append('hello@world.com');
            tr.append(td);

            td = $('<td>');
            td.append('Student');
            tr.append(td);

            td = $('<td>');
            var deleteBtn = $('<button>DELETE</button>');
            deleteBtn.click(deleteUser);
            deleteBtn.attr('id', user.id);
            deleteBtn.attr('username', user.username);
            td.append(deleteBtn);
            tr.append(td);

            tbody.append(tr);
        }
    }
    
    function deleteUser(event) {
        var $button = $(event.currentTarget);
        var id = $button.attr('id');
        alert(`delete user ${$button.attr('username')} !`);
        userServiceClient
            .deleteUser(id)
            .then(function () {
                userServiceClient
                    .findAllUsers()
                    .then(renderUsers);
            });
    }

})();