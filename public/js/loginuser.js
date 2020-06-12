$(document).ready(function() {
    
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
        
        $.post("/login", user)
        .then(getHomePage);
        $email.val("");
        $pw.val("");
    }

    function getHomePage() {
        $.get("/", function(){
            window.location.replace("/");
        })
        .catch(function(err) {
            console.log(err);
        });
      }
    
});
