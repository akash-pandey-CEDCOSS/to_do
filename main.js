$(document).ready(function () {
    $("#submit_").click(function () {     
        // Adding task 
        var task_ = $(".input_todo").val();
        if(task_!=""){
        $("#ul1").append(`<li><input type='checkbox' class="checkd"> <span class='task_done'>${task_}</span> <input type='text' class='val_'> <button type='button' class='edit'>Edit</button><button type='button' class='delete'>Delete</button><button type='button' class='save'>Save</button></li>`);
        $(".input_todo").val("");
        // delete Function
        $(".delete").click(function () {
            $(this).parent("li").toggleClass("stroked").fadeOut("slow");
        });
        // Checked Unchecked
        $(".checkd").click(function () {
            if ($(this).prop("checked") == true) {
                var a = $(this).parent("li");
                $("#ul2").append(a);
            }
        })
        $(".checkd").click(function () {
            if ($(this).prop("checked") == false) {
                var b = $(this).parent("li");
                $("#ul1").append(b);
            }
        })
        // edit function
        var toEdit = "";
        $(".edit").click(function () {
            var c = $(this).siblings(".task_done").html();
            
            $(this).siblings(".val_").val(c);


        });
        // save a edit
        $(".save").click(function () {
            var save_ = $(this).siblings(".val_").val().trim();
            
            $(this).siblings(".task_done").html(save_);
        });
    }

    });



});