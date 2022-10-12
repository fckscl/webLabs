document.getElementById('theme').onclick = function(){
    document.body.classList.toggle('dark');
}
var i = 1;
document.getElementById('op').onclick = function(){
    let li = document.querySelector('ul');
    i -= 0.1;
    if (i <= 0){
        i = 1;
    }
    li.style = `opacity: ${i}`;
}