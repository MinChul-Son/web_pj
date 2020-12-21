"use strict";
var count = 0;
$(document).ready(function() {
    $('#chat1').hide();
    $('#chat2').hide();
    $('#chat3').hide();
    $('#chat4').hide();
    $('#chat5').hide();
    $("body").keypress(function(e) {
        count++;
        if (e.keyCode == 13 && count == 1) {
            $('#chat1').show();
        } else if (e.keyCode == 13 && count == 2) {
            $('#chat2').show();
        } else if (e.keyCode == 13 && count == 3) {
            $('#chat3').show();
        } else if (e.keyCode == 13 && count == 4) {
            $('#chat4').show();
        } else {
            $('#chat5').show();
        }

    });
});