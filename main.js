$(document).ready(function () {
    $("#submit_").click(function () {
        // Adding task 
        var task_ = $(".input_todo").val();
        if (task_ != "") {
            $("#ul1").append(`<li> <span class='task_done'>${task_}</span> <input type='text' class='val_'> <button type='button' class='edit'>Edit</button> <button type='button' class='delete'>Delete</button> <button type='button' class='save'>Save</button> <input type='checkbox' class="checkd"> </li>`);
            $(".input_todo").val("");
            // delete Function
            $(".val_").hide();
            $(".save").hide();
            $(".delete").click(function () {
                $(this).parent("li").toggleClass("stroked").fadeOut("slow");
            });
            // Checked Unchecked
            $(".checkd").click(function () {
                if ($(this).prop("checked") == true) {
                    var a = $(this).parent("li");
                    $("#ul2").append(a);
                    $(".val_").hide();
                    $(".edit").hide();
                    $(".save").hide();
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
                $(".val_").show();
                $(".save").show();
                var c = $(this).siblings(".task_done").html();

                $(this).siblings(".val_").val(c);


            });
            // save a edit
            $(".save").click(function () {
                var save_ = $(this).siblings(".val_").val().trim();

                $(this).siblings(".task_done").html(save_);
                $(".val_").hide();

            });
        }

    });



});

