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
        var url = "/api/user/" + id;
        fetch(url, {
            method: 'delete'
        })
            .then(function () {
                findAllUsers()
                    .then(renderUsers);
            });
    }

})();