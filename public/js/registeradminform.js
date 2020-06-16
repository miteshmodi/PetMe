$(document).ready(function () {

    var $firstName = $("#firstName");
    var $lastName = $("#lastName");
    var $roleAdmin = $("#roleAdmin");
    var $adminemail = $("#adminemail");
    var $password = $("#password");


    $(document).on("submit", "#adminregisterform", insertNewAdmin);

    function insertNewAdmin(event) {
        event.preventDefault();
        var insertAdmin = {
            first_name: $firstName.val().trim(),
            last_name: $lastName.val().trim(),
            role: $roleAdmin.val().trim(),
            email: $adminemail.val().trim(),
            password: $password.val().trim()
        };

        // Validates that all fields are filled in
        if (!insertAdmin.first_name || !insertAdmin.last_name || !insertAdmin.role || !insertAdmin.email || !insertAdmin.password) {
            alert("All fields are required.");
            return;
        }
        // Validates that email address is in correct format
        var pattEmailAdr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!pattEmailAdr.test(insertAdmin.email)) {
            alert("Please enter a valid email address");
            return;
        }
        // Validates that password is at least 8 characters
        if (insertAdmin.password.length < 8) {
            alert("Password must be at least 8 characters.");
            return;
        }

        $.post("/registeradmin", insertAdmin)
            .then(getLoginPage);
        $firstName.val("");
        $lastName.val("");
        $roleAdmin.val("");
        $adminemail.val("");
        $password.val("");
    }

    function getLoginPage() {
        $.get("/login", function () {
            window.location.replace("/login");
        })
            .catch(function (err) {
                console.log(err);
            });
    }
});
