const table = document.querySelector('.table');
const tdAll = document.querySelectorAll('td');

const root = document.querySelector('.customTable');
const customTable = document.createElement('table');
const customTr = document.createElement('tr');
const arrOfTd = [];

let sum = 0;

const createCustomTable = () => {
  for (let i = 0; i < 6; i++) {
    const customTd = document.createElement('td');
    customTd.textContent = `element${i + 1}`;
    customTr.append(customTd);
    arrOfTd.push(customTd);
  }
  customTable.append(customTr);
  root.append(customTable);
  console.log(arrOfTd);
};

createCustomTable();

(() => {
  for (let i = 0; i < tdAll.length; i++) {
    tdAll[i].classList.add(`el${i + 1}`);
    console.log('done');
  }
  tdAll[0].style = 'color:blue; font-size:12px';
  tdAll[1].style = 'color:red; font-weight:bold';
  tdAll[2].style = 'color:green; font-style:italic';
  tdAll[3].style = 'border:1px dashed red';
  tdAll[4].style = 'color:blue;font-style:italic';
})();

const makeOneClass = () => {
  for (let i = 0; i < tdAll.length; i++) {
    tdAll[i].classList = `el1`;
    console.log('done');
    tdAll[i].style = 'color:blue; font-size:12px';
  }
  tdAll[0].addEventListener('mouseleave', () => {
    tdAll[0].classList.add(`el5`);
    tdAll[0].style = 'color:blue;font-style:italic';
  });
  tdAll[0].addEventListener('mouseenter', () => {
    tdAll[0].classList.add(`el2`);
    tdAll[0].style = 'color:red; font-weight:bold';
  });

  tdAll[1].addEventListener('dblclick', () => {
    tdAll[1].style = 'color:green; font-style:italic';
  });

  tdAll[2].addEventListener('click', () => {
    tdAll[2].style.fontStyle = 'italic';
  });

  tdAll[3].addEventListener('mouseover', () => {
    tdAll[3].style.color = 'yellow';
  });

  tdAll[4].addEventListener('dblclick', () => {
    tdAll[4].style.background = 'red';
  });

  tdAll[5].addEventListener('click', () => {
    tdAll[5].style.fontStyle = 'italic';
  });
};

for (let i = 0; i < tdAll.length; i++) {
  tdAll[0].addEventListener('click', () => {});
}

setTimeout(makeOneClass, 5000);

const addNumBtns = () => {
  const divBtn = document.createElement('div');
  const rezBtn = document.createElement('button');
  rezBtn.classList.add('rez');
  rezBtn.textContent = 'Result!';
  divBtn.append(rezBtn);

  for (let i = 0; i < 5; i++) {
    const btn = document.createElement('button');
    btn.classList.add('sumBtn');
    btn.textContent = i + 1;

    divBtn.append(btn);
  }

  divBtn.addEventListener('click', (event) => {
    console.log(event.target.textContent);
    if (event.target.classList == 'sumBtn') {
      sum += +event.target.textContent;
      console.log(sum);
    } else if (event.target.classList == 'rez') {
      alert(sum);
      // sum = 0;
    }
  });
  root.append(divBtn);
};

addNumBtns();

const greetingUser = () => {
  let userName = prompt('Write your name');
  userName = userName
    .split('')
    .filter((el) => el != ' ')
    .join('');
  userName ? alert(`hello, ${userName}`) : alert('hello, незнакомец)');
};

const showStudentInfo = () => {
  const p = document.createElement('p');
  p.textContent = 'Я, Пугач Дмитрий, учусь работать с JavaScript';
  p.style.fontSize = '16px';
  String.prototype.bold(p.textContent);

  p.addEventListener('click', () => {
    p.style.fontFamily = 'SF Pro Display'; 
    p.style.fontWeight = 1000;
  });

  p.addEventListener('dblclick', () => {
    p.style.color = 'red'; 
  });

  root.append(p);
};

function dop() {
  let admin = prompt('Who is there?');
  if (admin == 'Отмена'){
    alert('Отменено')
  } else if (admin == 'Админ'){
    let password = prompt('Введите пароль');
    if (password == 'Отмена'){
      alert('Отменено')
    } else if(password == 'Я главный'){
      alert('Здравствуйте!')
    } else{
      alert('Неверный пароль');
    }
  } else {
    alert("I don't know you")
  }
};

showStudentInfo();
greetingUser();
dop();