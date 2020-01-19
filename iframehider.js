$(function(){
    $('#off').click(function(){ 
        if(!$('#iframe').length) {
                $('#map').html('');
                document.getElementById("on").style.visibility = "visible";
        }
    });   
});
