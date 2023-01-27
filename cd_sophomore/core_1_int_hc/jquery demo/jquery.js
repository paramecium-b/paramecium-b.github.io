$(document).ready(function() {alert ("dear aliens"); })

$(document).ready(function() {$("#ufo").draggable(); })

$(document).ready(function() {$("#cat").draggable(); })

$(document).ready(function() {$("#grapes").draggable(); })

$(document).ready(function() {
    $("#grapes").click(function() {
        $("#diamond").toggle();
    })
})

$(document).ready(function() {$("#diamond").draggable(); })

$(document).ready(function() {
    $("#cat").hover(function () {
        $("#bananas").show();
    })
})

$(document).ready(function() {$("#bananas").draggable(); })