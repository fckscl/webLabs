let form = document.getElementById('txt');
form.onkeyup = function(){
    console.log(form.value[form.value.length - 1]);
    document.getElementById('div').innerHTML = form.value[form.value.length - 1];
}
console.log(form);

let link = document.querySelector('a');
link.onmouseenter = ()=>{console.log('onmouseenter')};
link.onmouseleave = ()=>{console.log('onmouseleave')};
link.oncopy = ()=>{console.log('oncopy')};
link.onmousemove = ()=>{console.log('onmousemove')};
link.ondragstart = ()=>{console.log('ondragstart')};

let temp = document.querySelector('h1');
temp.onclick = function (){
    alert('I can send message!');
}
temp.oncopy = function (){
    prompt('You can say me your name');
}
temp = document.querySelector('h2');
temp.onclick = function (){
    confirm('I can send message!');
}
temp.oncopy = function (){
    prompt('You can say me your name');
}
temp = document.querySelector('h3');
temp.addEventListener('dblclick', ()=>{alert('Hello!')});
temp.addEventListener('dblclick', ()=>{alert('Bue!')});
temp = document.querySelector('h4');
temp.addEventListener('dblclick', ()=>{this.style = 'color: red;'});
temp.addEventListener('dblclick', ()=>{confirm('Do you like it?')});
temp = document.querySelector('h5');
temp.onclick = function (){
    prompt('I just little header, what do you want from me?');
}
temp.onmouseleave = function (){
    confirm('Good Luck!');
}
let type = document.querySelector(prompt('Write tag of the element'));
// type.dispatchEvent('dblclick');
type.dispatchEvent(new Event(prompt('Write event')));