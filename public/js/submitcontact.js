$(".contact-form-btn").on("click", (e) => {
    e.preventDefault();

    console.log("testing");

    const name = $("#name").val();
    const email = $("#email").val();
    const phonenumber = $("#phonenumber").val();
    const message = $("#message").val();

    if (name.length === 0 || email.length === 0) {
        alert("you must enter a name and email.");
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && /^\d{10}$/.test(phonenumber)) {
        return true;
    } else {
        alert("You have entered an invalid email address or phone number");

    }

    const data = {
        name,
        email,
        phonenumber,
        message
    };


    $.post("/send", data, function (res) {
        console.log("Data was received!!!!!");
        location.href = "/email/confirmation"
    });


});