$(function (){
    let $tasksList = $("#tasksList");
    let $taskInput = $("#taskInput");
    let $notification = $("#notification");

    let displayNotification = function () {
        if(!$tasksList.children().length){
            $notification.fadeIn("fast");
        } else {
            $notification.css("display", "none");
        }
    }

    $("#taskEnter").on("click", function (){
        if(!$taskInput.val()) {return false;}
        console.log(123123);
        $tasksList.append("<li>" + $taskInput.val() + "<button class='delete'>&#10006</button></li>");

        $taskInput.val("");

        displayNotification()

        $(".delete").on("click", function (){
            let $parent = $(this).parent();

            $parent.css("animation", "fadeOut .3s linear");

            setTimeout(function () {
                $parent.remove();
                displayNotification();

            },250)
        })
    })
})