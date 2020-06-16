$(document).ready(function () {

    var $age = $("#age");
    var $petType = $("#petType");
    var $petname = $("#petname");
    var $zipcode = $("#zipcode");
    var $breed = $("#breed");
    // var fileToUpload = $('#upload').prop('files');

    $(document).on("submit", "#registerNewPet", insertNewPet);

    function insertNewPet(event) {
        event.preventDefault();
        
        
        // console.log(fileToUpload);
        // console.log(event.target[5].files[0]);
        // const formData = new FormData();
        // formData.append('file' , event.target[5].files[0], event.target[5].files[0].name);

        var insertPet = {
            age: $age[0].textContent,
            pet_type: $petType[0].textContent,
            pet_name: $petname.val().trim(),
            zip_code: $zipcode.val().trim(),
            breed: $breed.val().trim(),
            adopted: false,
            AdminId: 1,
            image: ''
        };
        console.log(insertPet);
        $.post("/listpet", insertPet).then(getAllPetAPi);

        // $.ajax({
        //     type: "POST",
        //     enctype: "multipart/form-data",
        //     url: "/listpet",
        //     data: insertPet,
        //     processData: false,
        //     contentType: false
        //   });
    
        $zipcode.val("");
        $breed.val("");
    }

    function getAllPetAPi() {
        $.get("/pets/", function () {
            window.location.replace("/pets/");
        })
            .catch(function (err) {
                console.log(err);
            });
    }
});
