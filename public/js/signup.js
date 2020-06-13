$(document).ready(function() {
    
    var $firstName = $("#firstname");
    var $lastName = $("#lastname");
    var $email = $("#signupemail");
    var $password = $("#signuppassword");


    $(document).on("submit", "#signupform", insertNewCustomer);

    function insertNewCustomer(event) {
        event.preventDefault();
        var inserCustomer = {
            first_name: $firstName.val().trim(),
            last_name: $lastName.val().trim(),
            email: $email.val().trim(),
            password: $password.val().trim()
        };

        $.post("/register", inserCustomer)
        .then(getLoginPage);
        $firstName.val("");
        $lastName.val("");
        $email.val("");
        $password.val("");
    }

    function getLoginPage() {
        $.get("/login", function(){
            window.location.replace("/login");
        })
        .catch(function(err) {
            console.log(err);
        });
      }
});
