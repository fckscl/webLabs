let div1 = document.getElementsByTagName('div');
let node = document.body.childNodes;
let al = document.children;
let ans = '';
let div2 = '';
for (let i in node){
    ans += node[i];
    div2 += al[i];
}
div1[0].innerHTML = ans;
div1[1].innerHTML = div2;

let l = document.getElementById('list').onclick = function(){
    document.getElementById('ul').style = '';
}

let a = document.getElementById('add').onclick = function(){
    document.querySelector('ul').innerHTML += '<li>next</li>';
}
let e = document.getElementById('even').onclick = function(){
    let even = document.querySelectorAll('ul :nth-child(2n+1)');
    for (let i in even){
        even[i].style = 'color: red';
    }
}

let el = document.querySelectorAll('div')[2];
let doc = document.getElementById('need');
let cls = document.getElementsByClassName('el')[0];
console.log(doc);

let img = document.querySelector('img');
let images = ['images/photo1647024951.jpeg', 'images/photo1639171590.jpeg', 'images/photo1642323423.jpeg', 'images/photo1642323423 (1).jpeg', 'images/photo1651063660.jpeg'];
i = 0;
img.onclick = function (){
    this.src = images[i];
    i++;
    i = i % images.length;
    console.log(this.src);
}

let buts = document.querySelectorAll('#l');
console.log(buts[0]);
let lin = document.querySelectorAll('a')[1]; 
buts[0].onclick = function(){
    lin.href = 'https://learn.javascript.ru/basic-dom-node-properties';
}
buts[1].onclick = function(){
    lin.href = 'https://www.figma.com/file/QuJ5ZW3o28x86inskZLnHw/Folo-Web?node-id=1%3A2';
}
buts[2].onclick = function(){
    lin.href = 'https://auto-virage.ru/sxem-2/oboznachenie-klemm-na-sxeme-graficheskie-i-bukvennye-po-gost.html';
}

let table = document.getElementById('owl');
let newrow = table.insertRow(-1);
newrow.insertCell(-1).innerHTML = "Признаки";
newrow.insertCell(-1).innerHTML = "Сычи";
newrow.insertCell(-1).innerHTML = "Ушастые совы";
newrow.insertCell(-1).innerHTML = "Филин";
newrow = table.insertRow(-1);
newrow.insertCell(-1).innerHTML = "Количество видов";
newrow.insertCell(-1).innerHTML = "3";
newrow.insertCell(-1).innerHTML = "6";
newrow.insertCell(-1).innerHTML = "16";
newrow = table.insertRow(-1);
newrow.insertCell(-1).innerHTML = "Большие уши";
newrow.insertCell(-1).innerHTML = "Нет";
newrow.insertCell(-1).innerHTML = "Да";
newrow.insertCell(-1).innerHTML = "Да";
newrow = table.insertRow(-1);
newrow.insertCell(-1).innerHTML = "Латинское наименование";
newrow.insertCell(-1).innerHTML = "Athene";
newrow.insertCell(-1).innerHTML = "Asio";
newrow.insertCell(-1).innerHTML = "Buto";
newrow = table.insertRow(-1);
newrow.insertCell(-1).innerHTML = "Итого по размерам";
newrow.insertCell(-1).innerHTML = "Мелкие";
newrow.insertCell(-1).innerHTML = "Средние";
newrow.insertCell(-1).innerHTML = "Крупные";
