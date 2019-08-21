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
            td.append(deleteBtn);
            tr.append(td);
            tbody.append(tr);
        }
    }
})();