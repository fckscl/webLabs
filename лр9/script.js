const root = document.querySelector('.root');
const spliceBtn = document.createElement('button');
spliceBtn.textContent = 'Splice';
spliceBtn.addEventListener('click', () => deleteAnyElements(arr4, 2, 2));
root.append(spliceBtn);

const ARR1 = [1, 2, 3];
const ARR2 = new Array(4, 5, 6);
const ARR3 = Array.of(7, 8, 9);

const arr4 = [...ARR1, ...ARR2, ...ARR3];

console.log(arr4);

const showArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let p = document.createElement('p');
    p.textContent = `Element ${i} --- ${arr[i]}`;
    root.append(p);
  }
};

function deleteAnyElements(arr, start, count) {
  arr.splice(start, count);
  showArr(arr);
}

function addToStartElements(arr, elem) {
  arr.shift(elem);
 
  console.log(arr);
}

function addToEndElements(arr, elem) {
  arr.push(elem);
  
}

function deleteFromStart(arr) {
  arr.unshift();
}

function deleteFromEnd(arr) {
  arr.pop();
}

function deleteOneElement(arr, elem) {
  delete arr[elem];
  console.log(arr);
}

function showModifiedArray(arr) {
  let newArr = arr.filter((el) => (el ? el : null));
  console.log(newArr);
  console.log(newArr.length);
}

function cleanArray(arr) {
  // arr = arr.filter((el) => (el = null));
  // arr.length = 0;
  arr = [];

  console.log(arr);
}

function divideNumber(num) {
  console.log(
    num
      .split('')
      .map((el) => (el % 2 ? (el += ':') : el))
      .join('')
  );
}

function sumArrayOptionOne(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

function sumArrayOptionTwo(arr) {
  console.log(
    arr.reduce((previousValue, currentValue) => previousValue + currentValue)
  );
}

const number = prompt('Введите число', 0);
if (isNaN(number)) {
  alert('Нужно писать число!');
} else {
  alert('Вы полностью правы!');
}

sumArrayOptionOne([1, 2, 3]);
sumArrayOptionTwo([1, 2, 3]);

divideNumber(number);

addToStartElements(arr4, [2, 23]);
deleteOneElement(arr4, arr4.length - 1);
deleteOneElement(arr4, 1);
deleteOneElement(arr4, 2);
showModifiedArray(arr4);
cleanArray(arr4);
showArr(arr4);

const temp = Array.of(1, 2, 4, 89, 989, 0, -8, -78)
let num = prompt('Введите количество последних элементов - Х:')
for (let i = temp.length - num; i < temp.length; i++){
  let p = document.createElement('p');
  p.textContent = `Элемент ${i} --- ${temp[i]}`;
  root.append(p);
}
let max = 0;
for (let i = 0; i < temp.length; i++){
  if (temp[i] > max){
    max = temp[i]
  }
}
let p = document.createElement('p');
p.textContent = `Максимальный элемент массива равен ${max}`;
root.append(p);