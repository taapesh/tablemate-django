$(document).ready(function(){
    $('#cc-number').formatter({
        'pattern': '{{9999}} {{9999}} {{9999}} {{9999}}',
        'persistent': false
    });

    $('#cvv').formatter({
        'pattern': '{{999}}',
        'persistent': false
    });

    $('#zipcode').formatter({
        'pattern': '{{99999}}',
        'persistent': false
    });

    $("#exp-month").on("change",function() {
        $('#exp-month').addClass("select-after");
        $("#exp-month").removeClass("select-initial");
    });
    $("#exp-year").on("change",function() {
        $('#exp-year').addClass("select-after");
        $("#exp-year").removeClass("select-initial");
    }); 
});