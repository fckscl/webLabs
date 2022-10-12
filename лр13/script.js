var newwin;

function winop2()
{
newwin=window.open('', '', 'height=200, width=200, menubar=yes, location=yes, scrollbars=yes, toolbar=no');
}
function winop4()
{
    newwin=window.open('', '', 'height=400, width=400, menubar=no, location=yes, scrollbars=no, toolbar=yes');
}

document.getElementById('200').onclick = winop2;
document.getElementById('400').onclick = winop4;
document.getElementById('scroll').onclick = function(){
    var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      let wid = window.innerHeight;
      let scrol = document.documentElement.clientHeight;
      console.log(wid != scrollHeight);
 };
 document.getElementById('height').onclick = function(){
     console.log(window.screen.height);
     window.resizeBy(0, -300);
     window.resizeTo(500, 500);
     window.innerHeight -= 300;
     console.log(window.height);
 }; 
