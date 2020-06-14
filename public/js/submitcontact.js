$(".contact-form-btn").on("click", (e) => {
    e.preventDefault();

    console.log("testing");

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const phonenumber = $("#phonenumber").val().trim();
    const message = $("#message").val().trim();

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