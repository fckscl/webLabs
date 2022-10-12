let obj1 = {
    os : "Windows",
    year : "2022",
    proc : "Intel",
    graph : "Nvidia",
    color : "black",
    show(){
        console.log('Объект 1')
        for(key in obj1){
            console.log('Свойство:', key,"Значение свойства:",obj1[key])
        }
    },
};

let obj2 = new Object();
obj2.os = "MacOS";
obj2.year = "2021";
obj2.proc = "M1";
obj2.graph = "M1 GPU";
obj2.color = "white";

function tusk2(){
    for(key in obj1){
        console.log(key,":",obj2[key])
    }
}

// tusk2();
// obj1.show();

function displayObject(obj){
    let str = "";
    for(key in obj){
        str += "<span>Свойство: "+ key +" Значение свойства: "+obj[key]+"</span>" +"</br>";
    }
    document.write(str);
}

displayObject(obj2);

let man = {
    name: "Виничук Ольга",
    age: 20,
    sex: "Female",
    "social status": "Teacher",
    get info(){
        return`${this.name} is ${this["social status"]}`
    },
    set date(newDate){
        this.year = newDate;
    },
}

console.log(man.info);
console.log(man.sex);
man.date = "2002";
console.log(man.year);

let book ={
    author : "J. Oruell",
    year : "1984",
}

let clone = {}; 

for (let key in book) {
  clone[key] = book[key];
}

let flag = {
    field: 'Экспериментов',
    sky: 'Июль',
    pie: 'Беспонтовый'
}

Object.defineProperty(flag, 'field', {
    writable: false
})

Object.defineProperty(flag, 'sky', {
    configurable: false
})

Object.defineProperty(flag, 'pie', {
    enumerable: false
})
console.log(book);
console.log(clone);

flag.field = 'GHbdtn'
console.log(flag)