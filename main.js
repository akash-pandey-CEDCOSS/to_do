$(document).ready(function () {
    $("#submit_").click(function () {


        var task_ = $("#input_todo").val();
        $("ul").append("<li><input type='checkbox'><input type='text'>" + task_ + "<button type='button' class='edit'>Edit</button><button type='button' class='delete'>Delete</button></li>");

        $(".delete").click(function () {

            $(this).parent("li").remove();

        });
        $(".edit").click(function(){

        })


    });


});