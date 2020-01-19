$(function(){
    $('#on').click(function(){ 
        if(!$('#closebutton').length) {
                document.getElementById("on").style.visibility = "hidden";
                document.getElementById("closebutton").style.visibility = "visible";
        }
    });   
});
