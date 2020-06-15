$(document).ready(function () {

    $("#age").click(function (event) {
        // event.preventDefault();
       
        selectOption("#age");
    });

    $("#petType").click(function (event) {
        // event.preventDefault();
       
        selectOption("#petType");
    });

    $("#milesrange").click(function (event) {
        // event.preventDefault();
       
        selectOption("#milesrange");
    });

    function selectOption(id) {
        $('.dropdown-item').click(function(event) {
            event.preventDefault();
            var text = $(this).text();
            $(id).html(text);
            $(id).val(text);
            id = "";
        });
    }
});