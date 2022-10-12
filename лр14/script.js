let bod = document.body.children;
console.log(bod);
console.dir(bod[2]);

let table = "<table>";
let month = document.querySelectorAll('li');
for (let i = 0; i < 12; i++) {
    table += `<tr><td>${i+1}</td><td>${month[i+2].innerHTML}</td>`;
}
table += "</table>";
document.writeln(table);

let spis = document.querySelectorAll('ol')[1];
spis.innerHTML += '<li>13 месяца не бывает</li>';

let ul = '<ul>';
let days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'Суббота', 'воскресенье'];
for (let i in days) {
    ul += `<li>${days[i]}</li>`;
}
ul += '</ul>';
spis.innerHTML += ul;

function head(){
    let headers = document.querySelectorAll('body h1');
    for (let i in headers){
        console.log(headers[i].innerHTML);
    }
}
document.getElementById('headers').onclick = head;

console.log(document.getElementById('Yes').checked);
let yes = document.getElementById('Yes');
function color(){
    let radio = document.getElementsByName('Yse');
    if (radio[0].checked){
        radio[0].nextSibling.nextSibling.style = "color: red;";
    } else {
        radio[0].nextSibling.nextSibling.style = "color: blue;";
    }
}
yes.onclick = color;
document.getElementById('NO').onclick = color;

var start = 0;
var end = 0;
function check(){
    let test = document.querySelectorAll('#test');
    let mistake = 0;
    if (!test[1].checked){
        alert('Mistake in first question');
        mistake += 1;
    }
    if (!test[3].checked){
        alert('Mistake in second question');
        mistake += 1;
    }
    if (test[6].checked || test[8].checked || !test[7].checked || !test[9].checked){
        alert('Mistake in third question');
        mistake += 1;
    }
    alert(`Your mark is ${3 - mistake} out of 3, congratulations! Time on test: ${end - start}мс`);
}
document.getElementById('answer').onclick = check;


function st(){
    start = new Date();
    console.log(start);
};
function en(){
    end = new Date();
};
document.getElementsByName('Photoshop')[0].onclick = st;
document.getElementsByName('Photoshop')[1].onclick = st;
document.getElementsByName('Photoshop')[2].onclick = st;
document.getElementsByName('Rastr')[0].onclick = en;
document.getElementsByName('Rastr')[1].onclick = en;
document.getElementsByName('Rastr')[2].onclick = en;
document.getElementsByName('Rastr')[3].onclick = en;

document.getElementById('all').addEventListener('click', ()=>{
    let nod = document.body.children;
    for (let i in nod){
        alert(nod[i].outerHTML);
    }
    
});