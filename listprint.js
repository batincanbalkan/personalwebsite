var MessAry = [];
MessAry[0] = 'Engineering Intern July 2018 – September 2018 ' + 
'Getir, Istanbul, Turkey <br>' +
'In a team of 4, coded a part of the new update using JavaScript. <br>' +
'Contributed to content creation as a technical writer for design documentation. <br>' +
'Methodically utilized case modeling during system design and implementation to demonstrate thorough comprehension of'
+ 'stakeholder requirements. <br>' +
'Contributed to recording a video of functionality for AppStore update.';
MessAry[1] = 'Software Engineering Intern August 2015 – September 2015 <br>' +
'DorukNet, Istanbul, Turkey <br>'+
'Learned how to document a project from a lead engineer and documented a part of backend code. <br>'+
'Learned how to work as a group on a huge project, and how to use GitHub';
MessAry[2] = 'Software Engineering Intern July 2015 – August 2015 <br>' +
'Koc Holding, Istanbul, Turkey <br>' +
'Helped researches with their researches.';
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