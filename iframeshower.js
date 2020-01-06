$(function(){
    $('#on').click(function(){ 
        if(!$('#iframe').length) {
                $('#map').html('<iframe src="https://fxo.io/m/58226ew6" width="100%" height="100%" style="border: 3px solid rgb(0, 204, 204); width: 100%; height: 100%;" allowfullscreen></iframe>');
                document.getElementById("on").style.visibility = "hidden";
        }
    });   
});
