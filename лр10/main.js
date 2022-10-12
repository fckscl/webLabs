function tusk1 (){
    let chislo = prompt("Введите число", "");
    let stepen = prompt("Введите степень", "");
    if(chislo){
        if(stepen){
            alert(Math.pow(+chislo, stepen));
        }
        else{
            alert(chislo);
        }
    }
    else{
    alert('Проверьте число');
    }
}

tusk1();

let month = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

function tusk2(){
    let numMonth = undefined;
    while(isNaN(numMonth)){
        numMonth = prompt("Введите номер месяца", "");
        window.numMonthGlob = parseInt(numMonth);
    }   
}

tusk2();
alert(month[+numMonthGlob-1]);

const findMax = (el) =>{
    if(el<10){
        console.log('Элемент находится в диапазоне от 0 до 9');
    }
    else{
        if((el>=10)&&(el<=100)){
            console.log('Элемент находится в диапазоне от 10 до 100');
        }
        else{
            if(el>100){
                console.log('Элемент находится в диапазоне свыше 100');
            }
        }
    }
}

let tusk3  = function(){
    let mas = new Array(10);
    let maxEl = 0;
    for(i = 0; i<mas.length; i++){
        mas[i] = Math.floor(Math.random()*10);
        if(mas[i]>maxEl)
        maxEl = mas[i];
    }
    console.log(mas);
    console.log(maxEl);
    findMax(maxEl);
}

tusk3();

function tusk4(repeat){
    let str = prompt('Введите строку для повторения','');
    let n = prompt('Введите количество повторений','');
    if((!n)||(!+n))
    n = 2;
    return repeat(str, n);
}

tusk4(function(str,n){
    let stroka = str;
    for(i = 1; i<n; i++){
    stroka+=str;
    }
    alert(stroka);
});

function addN(n){
    return n + function tusk6(){
        return 123;
    }()
}

const tusk5 = (a, b, c) =>{return a*b/c};
console.log(tusk5(12,2,4));
console.log(addN(123));