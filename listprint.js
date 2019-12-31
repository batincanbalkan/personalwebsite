var MessAry = [];
MessAry[0] = 'getir de getirelim';
MessAry[1] = 'getir dedin';
MessAry[2] = 'getirdik';
function CngMess(evt, id) {
  var el = evt.target || evt.srcElement;
  var ul = el.parentNode;
  var lis = ul.getElementsByTagName('li');

  for (var i=0, iLen=lis.length; i<iLen; i++) {
    if (lis[i] == el) {
      document.getElementById(id).innerHTML = MessAry[i];
    }
  }
}