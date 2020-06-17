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
        // Validates that all fields are filled in
        if (!inserCustomer.first_name || !inserCustomer.last_name || !inserCustomer.email || !inserCustomer.password) {
            alert("All fields are required.");
            return;
        }
        // Validates that email address is in correct format
        var pattEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!pattEmail.test(inserCustomer.email)) {
            alert("Please enter a valid email address");
            return;
        }
        // Validates that password is at least 8 characters
        if (inserCustomer.password.length < 8) {
            alert("Password must be at least 8 characters.");
            return;
        }

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
