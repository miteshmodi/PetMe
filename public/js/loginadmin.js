$(document).ready(function () {

    var $email = $("#loginemail");
    var $pw = $("#loginpassword");

    $(document).on("submit", "#loginform", validateUser);

    function validateUser(event) {
        event.preventDefault();
        var user = {
            email: $email.val().trim(),
            password: $pw.val().trim()
        };

        if (!user.email || !user.password) {
            return;
        }

        $.post("/loginadmin", user)
            .then(getListPets);
        $email.val("");
        $pw.val("");
    }

    function getListPets() {
        $.get("/listpet", function () {
            window.location.replace("/listpet");
        })
            .catch(function (err) {
                console.log(err);
            });
    }
});
