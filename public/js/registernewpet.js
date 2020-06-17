$(document).ready(function () {

    var $age = $("#age");
    var $petType = $("#petType");
    var $milesinrange = $("#milesrange");
    var $petname = $("#petname");
    var $zipcode = $("#zipcode");
    var $breed = $("#breed");
    // var fileToUpload = $('#upload').prop('files');

    $("#registerNewPet").on("submit", insertNewPet);
    // $(document).on("submit", ".searchform", insertNewPet);
    // $(".searchform").on('submit', searchPet);

    function searchPet(event) {
        event.preventDefault();
        var petLookUp = {
            age: $age[0].textContent,
            pet_type: $petType[0].textContent,
            zip_code: $zipcode.val().trim(),
            breed: $breed.val().trim(),
            milesinrange: $milesinrange[0].textContent
        };

        $.ajax({
            type: "POST",
            url: "/",
            data: petLookUp
        }).then(function (pets) {
            var dataRetVal = JSON.stringify(pets);
            $.ajax({
                type: "PUT",
                url: "/",
                data: dataRetVal
            })
            // console.log(pets);
            // pets.forEach(pet => {
            //     $("#displaypet").append();
            // });
            
        });

        // $.post("/", petLookUp).then(function(response) {
        //     console.log(response);
            // res.render('index', {
            //     title: 'PetMe | Home',
            //     css: ['index.css'],
            //     js: [ 'registernewpet.js', 'dropdownitems.js'],
            //     pets: dbPets
            // });
        // });

        $age[0].textContent = "Age";
        $petType[0].textContent = "Pet Type";
        $zipcode.val("");
        $breed.val("");
        $milesinrange[0].textContent = "Miles within";
    }

    function getAllPetAPi(response) {
        $.get("/", function () {
            window.location.replace("/");
        })
            .catch(function (err) {
                console.log(err);
            });
    }

    function insertNewPet(event) {
        event.preventDefault();

        // console.log(fileToUpload);
        console.log(event.target[5].files[0]);
        const formData = new FormData();
        formData.append('age', $age[0].textContent);
        formData.append('pet_type', $petType[0].textContent);
        formData.append('AdminId', $petType[0].textContent);
        formData.append('adopted', false);
        formData.append('file', event.target[5].files[0], event.target[5].files[0].name);

        // var insertPet = {
        //     age: $age[0].textContent,
        //     pet_type: $petType[0].textContent,
        //     pet_name: $petname.val().trim(),
        //     zip_code: $zipcode.val().trim(),
        //     breed: $breed.val().trim(),
        //     adopted: false,
        //     AdminId: 1,
        //     image: ''
        // };
        // console.log(insertPet);
        // $.post("/listpet", insertPet).then(getAllPetAPi);

        $.ajax({
            type: "POST",
            enctype: "multipart/form-data",
            url: "/listpet",
            data: formData,
            processData: false,
            contentType: false
        });

        $zipcode.val("");
        $breed.val("");
    }
});
