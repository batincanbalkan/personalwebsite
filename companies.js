function getir(){
    document.getElementById('getir').style.visibility='visible';
    document.getElementById('placeholder').style.visibility='hidden';
    document.getElementById('DorukNet').style.visibility='hidden';
    document.getElementById('KocHolding').style.visibility='hidden';
}
function doruknet(){
    document.getElementById('getir').style.visibility='hidden';
    document.getElementById('DorukNet').style.visibility='visible';
    document.getElementById('KocHolding').style.visibility='hidden';
    document.getElementById('placeholder').style.visibility='hidden';
}
function kocholding(){
    document.getElementById('getir').style.visibility='hidden';
    document.getElementById('DorukNet').style.visibility='hidden';
    document.getElementById('KocHolding').style.visibility='visible';
    document.getElementById('placeholder').style.visibility='hidden';
}
