$(document).ready(function () {

    var $age = $("#age");
    var $petType = $("#petType");
    var $petname = $("#petname");
    var $zipcode = $("#zipcode");
    var $breed = $("#breed");
    var $upload = $("#upload");


    $(document).on("submit", "#registerNewPet", insertNewPet);

    function insertNewPet(event) {
        event.preventDefault();
        var insertPet = {
            age: $age[0].textContent,
            pet_type: $petType[0].textContent,
            pet_name: $petname.val().trim(),
            zip_code: $zipcode.val().trim(),
            breed: $breed.val().trim(),
            adopted: false,
            image: $upload
        };
        $.post("/listpet", insertPet).then(getAllPetAPi);
    
        $zipcode.val("");
        $breed.val("");
    }

    function getAllPetAPi() {
        $.get("/api/pets/", function () {
            window.location.replace("/api/pets/");
        })
            .catch(function (err) {
                console.log(err);
            });
    }
});
