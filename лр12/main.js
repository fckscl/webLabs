let today;

function time(){
   today = new Date();
}

setInterval(time, 1000);
time();

let timeYear ={
    summer: "Июнь, Июль, Август",
    winter: "Декабрь, Январь, Февраль",
    spring: "Март, Апрель, Май",
    autumn: "Сентябрь, Октябрь, Ноябрь",
};

((+today.getMonth()+1>2) && (+today.getMonth()+1<6)) ? console.log(timeYear.spring) : 
((+today.getMonth()+1>5) && (+today.getMonth()+1<9)) ? console.log(timeYear.summer) :
((+today.getMonth()+1>8) && (+today.getMonth()+1<12)) ? console.log(timeYear.autumn) : console.log(timeYear.winter); 


let birthday = new Date(prompt('year'), prompt('month'), prompt('day')); 
let age = today.getFullYear() - birthday.getFullYear();

if (age <= 0){
    alert('Вы еще не родились');
} else if(today.getMonth()+1<birthday.getMonth()){
    age--;
}
else{
    if((today.getMonth()+1 == birthday.getMonth()) && (today.getDay()<birthday.getDay()))
    age--;
}

console.log(age);

let startTime;
let endTime;

document.getElementById('start').onclick = function(){
    console.log("start", today.getSeconds() );
    
    startTime = today.getHours() + " " + today.getMinutes() + " " +today.getSeconds();
}
document.getElementById('end').onclick = function(){
    console.log("end");
    endTime = today.getHours() + " " + today.getMinutes() + " " +today.getSeconds();
    alert(startTime + '\n'+ endTime);
}

function min(args){
    let ans = args[0];
    for (i in args){
        if (args[i] < ans) {
            ans = args[i];
        }
    }
    return ans;
}
console.log(min([8, 2, 3]));

function index(string, sub){
    return string.indexOf(sub);
}
console.log(index('123 456', '45'));

Number.prototype.isOdd = function(){
    if (this % 2 != 0){
        return true;
    }
}

let abc = 56;

if(abc.isOdd()){
    console.log("Нечетное")
}
else{
    console.log("Четное")
}

let stroka = "q54eqweqw";

function tusk6(stroka){
    let regular = /\d/; /* Регулярное выражение - Цифра */
    let result = stroka.search(regular); /* Ищем цифру в строке */
    if (result == 0) 
    console.log("Строка начинается с Цифры");
    else
    console.log("В начале строки нет цифры");
}

tusk6(stroka);

function palindrom(string){
    console.log(string);
    // let reverse = string.reverse;
    for (let i = 0; i < string.length; i++){
        if (string[i] != string[string.length - i - 1]){
            return false;
        }
    }
    return true;
}
console.log(palindrom("r123321"));