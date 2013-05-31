$(document).ready(function () {

    $('#droppableeast').hide();
    $('#droppablewest').hide();

});


$(init);

function init() {

    $('.group').draggable({
        start: function (event, ui) {
            $('#droppableeast').show();
            $('#droppablewest').show();
            $('#droppablewest').css('z-index', 10001); //bring to front
            $('#droppableeast').css('z-index', 10001); //bring to front

        },
        stop: function (event, ui) {

            $('#droppableeast').hide();
            $('#droppablewest').hide();

        },


        containment: 'page',
        snap: 'page',
        cursor: 'move',
        revert: 'invalid'
    });



    //        Dropables!
    $("#droppableeast").droppable({
        drop: function (event, ui) {
            var draggable = $(ui.draggable).attr('id');
            
            if (draggable == "sidebar") {
                $(ui.draggable).animate({ top: 0, left: 0 }).css({ float: "left" });
                $("article").animate({}).css({ float: "right" });
            }
            else if (draggable == "article") {
                $(ui.draggable).animate({ top: 0, left: 0 }).css({ float: "left" });
                $("sidebar").animate({}).css({ float: "right" });
            }

        }
    });

    $("#droppablewest").droppable({
        drop: function (event, ui) {
            var draggable = $(ui.draggable).attr('id');

            if (draggable == "sidebar") {
                $(ui.draggable).animate({ top: 0, left: 0 }).css({ float: "right" });
                $("article").animate({}).css({ float: "left" });
            }
            else if (draggable == "article") {
                $(ui.draggable).animate({ top: 0, left: 0 }).css({ float: "right" });
                $("sidebar").animate({}).css({ float: "left" });
            }

        }
    });


}
