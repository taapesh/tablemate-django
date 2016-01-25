$(document).ready(function(){
    $('#learn-1').click(function(){
        
        if ($('#more-info-1').is(":visible")) {
            $('#more-info-1').hide();
        } else {
            $('#more-info-1').fadeToggle(600);
        }
        $('#overview-1').toggleClass('overview-feature-revealed');
        $('#plus-1').toggleClass('icon_close_alt2');
        $('#plus-1').toggleClass('info-toggled');
        $('#learn-text-1').toggle();
    });
    $('#learn-2').click(function(){
        
        if ($('#more-info-2').is(":visible")) {
            $('#more-info-2').hide();
        } else {
            $('#more-info-2').fadeToggle(600);
        }
        $('#overview-2').toggleClass('overview-feature-revealed');
        $('#plus-2').toggleClass('icon_close_alt2');
        $('#plus-2').toggleClass('info-toggled');
        $('#learn-text-2').toggle();
    });
    $('#learn-3').click(function(){
        
        if ($('#more-info-3').is(":visible")) {
            $('#more-info-3').hide();
        } else {
            $('#more-info-3').fadeToggle(600);
        }
        $('#overview-3').toggleClass('overview-feature-revealed');
        $('#plus-3').toggleClass('icon_close_alt2');
        $('#plus-3').toggleClass('info-toggled');
        $('#learn-text-3').toggle();
    });
});