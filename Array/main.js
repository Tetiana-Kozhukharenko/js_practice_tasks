/* 1.Напишіть функцію, яка приймає масив данних підписників і виводить на екран за допомогою alert 
привітання, якщо у вас більше 100 підписників */

const subscribers = [
  {name: 'user1', age: 18,},
  {name: 'user2', age: 28,},
  {name: 'user3', age: 13,},
  {name: 'user4', age: 36,},
  {name: 'user5', age: 18,},
];

function congratsIfMoreThan100(arrSubscribers) {
  if (arrSubscribers.length > 100 ) {
    alert('Congratulations, you have more than 100 followers!');
  } else {
    alert('You have less than 100 followers :(')
  }
}

congratsIfMoreThan100(subscribers);


// 2.Створіть масив numbers і заповніть його числами від 1 до 10. Знайдіть суму всіх чисел в масиві numbers і виведіть її в консоль.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
let sum = 0;

for (let number of numbers) {
  sum += number;
}

console.log(sum);

// 3.Замініть кожне число в масиві numbers на його квадрат (число, помножене на саме себе).

const newNumbers = []

for (let num of numbers) {
  newNumbers.push(num * num);
}

console.log(newNumbers);
 
// 4.Створіть порожній масив evenNumbers. Додайте до нього лише парні числа з масиву newNumbers.

const evenNumbers = [];

for (let num of newNumbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

console.log(evenNumbers);

// 5.Знайдіть найбільше та найменше число в масиві і виведіть їх в консоль.

const prices = [3, 56, 7, 89, 566, 44, 366, 12, 442];

console.log(Math.max(...prices));
console.log(Math.min(...prices));

// 6.Відсортуйте масив prise за зростанням і виведіть його в консоль.

const prices2 = prices;

prices2.sort(function(a, b) {
  return a - b;
});

console.log(prices2);

// 7.Створіть масив styles з елементами “Jazz” та “Blues”. Додайте “Rock-n-Roll” в кінець масиву.

const styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');

console.log(styles);

// 8.Замініть значення в середині масиву на “Classics”. Ваш код повинен шукати медіанний елемент у масивах будь-якої довжини.

const middleOfArray = Math.floor(styles.length / 2);

styles[middleOfArray] = 'Classics';

console.log(styles);

// 9.Видаліть перший елемент масиву та покажіть його.

const firstElement = styles.shift();

console.log(firstElement);

// 10.Вставте Rap та Reggae на початок масиву.

styles.unshift('Rap', 'Reggae');

console.log(styles);

/* 11.Напишіть функцію getSumInput(), яка просить користувача ввести числа за допомогою prompt та зберігає їх в масив.
Треба закінчити робити запити в користувача після того, як введено не числове значення, порожній рядок або натиснуто “відмінити”.
Функція підраховує та повертає суму елементів масиву. */

function getSumInput() {
  const nums = [];
  let res = 0;

  while (true) {
    let num = prompt('Введіть число:', '');
  
    if (isNaN(+num) || num === null || num.trim() === '') {
      alert('Ви ввели не число!')
      break;
    } else {
      nums.push(+num);
      continue;
    }
  }

  for (let num of nums) {
    res += num;
  }

  return alert(`Сума введених чисел дорівнює: ${res}`);
}

getSumInput(); 

/* 12.Напишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”. Тобто дефіси видаляються, 
а всі слова після них починаються з великої літери. */

function camelize(str) {
  let newArr = [];
  const characterArray = str.split('');

  for(let i = 0; i < characterArray.length; i++) {
    if( characterArray[i].includes('-') ) {
      i++;
      newArr.push( characterArray[i].toUpperCase() );
    } else {
      newArr.push(characterArray[i]);
    }
  }

  return newArr.join('');
}

const camelizeStr = camelize('my-short-string');
console.log(camelizeStr);

/* 13.Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи більші-рівні a та менші-рівні b
і віддає масив цих елементів. Функція повинна повертати новий масив і не змінювати вихідний. */

const numArr = [5, 3, 8, 1];

// Перший варіант розв'язку:

function filterRange(arr, a, b) {
  const newArr = [];

  arr.forEach((el) => {
    if (el >= a && el <= b) {
      newArr.push(el);
    }
  });
  return newArr;
}

const filteredArr = filterRange(numArr, 1, 4);
console.log(filteredArr);
console.log(numArr);

// Другий варіант розв'язку:

function filterRange2(arr, a, b) {
  return arr.filter(el => el >= a && el <= b);
}

const filteredArr2 = filterRange2(numArr, 1, 4);
console.log(filteredArr2);
console.log(numArr);

/* 14.Напишіть функцію filterRangeInPlace(arr, a, b), яка приймає масив arr і видаляє з нього всі значення крім тих, які 
знаходяться між a і b. */

const arrNum = [2, 5, 3, 8, 4, 5, 1];

function filterRangeInPlace(arr, a, b) {
  const newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= a && arr[i] <= b) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const ans = filterRangeInPlace(arrNum, 1, 4);
console.log(ans);

// 15.Відсортуйте за спаданням масив чисел.
const arr = [5, 2, 1, -10, 8];

// Перший варіант розв'язку:

arr.sort((a,b) => b - a);

// Другий варіант розв'язку:

arr.sort((a, b) => {
  if (a > b) {
    return -1
  } else if (a == b) {
    return 0
  } else {
    return 1
  }
});

console.log(arr);

// 16.Створіть функцію copySorted(arr), яка буде повертати копію відсортованого масиву.

let arrStr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  const arrayCopy = arr.slice();
  return arrayCopy.sort();
}

const copySortedArr = copySorted(arrStr);
console.log(copySortedArr);
console.log(arrStr);

// 17.Напишіть функцію unique(arr), яка повертає масив, що містить тільки унікальні елементи arr.

const strings = ["Привіт", "Світ", "Привіт", "Світ", "Привіт", "Привіт", "Світ", "Світ", ":-O"];

function unique(arr) {
  const newArr = [];

  for(let string of arr) {
    if(!newArr.includes(string)) {
      newArr.push(string);
    }
  }
  return newArr;
}

const uniqueElements = unique(strings);
console.log(uniqueElements);

// 18.Є масив об’єктів, в кожному з них є name. Напишіть код, який перетворює їх в масив імен.

const ivan = { name: "Іван", age: 25 };
const petro = { name: "Петро", age: 30 };
const mariya = { name: "Марія", age: 28 };

const users = [ ivan, petro, mariya ];

function getusersNames(arr) {
  let names = [];

  for(let i = 0; i < arr.length; i++) {
    names.push( arr[i].name );
  }
  return names;
}

const namesUsers = getusersNames(users);
console.log(namesUsers);

/* 19.Є масив обʼєктів, у кожного є name, surname та id. Напишіть код, який створить ще один масив
обʼєктів з параметрами id й fullName, де fullName – складається з name та surname. */

const ivan2 = { name: "Іван", surname: "Іванко", id: 1 };
const petro2 = { name: "Петро", surname: "Петренко", id: 2 };
const mariya2 = { name: "Марія", surname: "Мрійко", id: 3 };

const users2 = [ ivan2, petro2, mariya2 ];

function getNewArrUsersMapped(arr) {
  const usersMapped = [];

  for (let i = 0; i < arr.length; i++) {
    const obj = {};
    obj.fullName = arr[i].name + ' ' + arr[i].surname;
    obj.id = arr[i].id;
    usersMapped.push(obj);
  }
  return usersMapped;
}

const arrUsersMapped = getNewArrUsersMapped(users2);
console.log(arrUsersMapped);

/* 20.Напишіть функцію sortByAge(users), яка відсортує масив об'єктів користувачів за віком, функція
приймає масив обʼєктів з властивістю age і сортує їх по цій властивості. */

const ivan3 = { name: "Іван", age: 25 };
const petro3 = { name: "Петро", age: 30 };
const mariya3 = { name: "Марія", age: 28 };

const arrUsers = [ petro, ivan, mariya ];

function sortByAge(users) {
  const copyArr = users.slice();

  return copyArr.sort( (a, b) => a.age - b.age );
}

const sortedByAge = sortByAge(arrUsers);
console.log(sortedByAge);

// 21.Напишіть функцію getAverageAge(users), яка приймає масив об’єктів з властивістю age та повертає середній вік.

const john = { name: "John", age: 25 };
const pete = { name: "Pete", age: 30 };
const mary = { name: "Mary", age: 29 };

const arrUsers2 = [ john, pete, mary ];

function getAverageAge(users) {
  const ans = users.reduce( (sum, user) => sum + user.age, 0);
  return ans / users.length;
}

const middleAge = getAverageAge(arrUsers2);
console.log(middleAge);

/* 22.Припустимо, ви отримали масив користувачів у вигляді {id:..., name:..., age:...}. Створіть
функцію groupById(arr), яка створює з масиву об’єкт із ключом id та елементами масиву як значеннями. */

const users1 = [
  {id: 'іван', name: "Іван Іванко", age: 20},
  {id: 'ганна', name: "Ганна Іванко", age: 24},
  {id: 'петро', name: "Петро Петренко", age: 31},
];

function groupById(arr) {
  const newObj = {};

  for(let i = 0; i < arr.length; i++) {
    let id = arr[i].id;
    newObj[id] = arr[i];
  }
  return newObj;
}

const usersById = groupById(users1);
console.log(usersById);