/* 1.Створіть порожній об’єкт user. Додайте властивість name зі значенням Іван. Додайте властивість 
surname зі значенням Сміт. Змініть значення name на Петро. Видаліть властивість name з об’єкта. */

const user = {};
user.name = 'Іван';
user.surname = 'Сміт';
user.name = 'Петро';
delete user.name;

// 2.Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивостей, інакше false.

function isEmpty(obj) {

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

const schedule = {};

const isEmptyObj = isEmpty(schedule);
console.log(isEmptyObj);

// 3.Напишіть код для підсумовування всіх зарплат. Якщо об’єкт salaries порожній, то результат має бути 0.

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

function getSumSalary(obj) {
  let totalSum = 0;

  for(let sum in obj) {
    totalSum += obj[sum];
  }

  return totalSum;
}

const sumSalary = getSumSalary(salaries);
console.log(sumSalary);

/* 4.Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.
З функції не потрібно нічого повертати, слід безпосередньо змінювати об’єкт. */

const menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};

function multiplyNumeric(obj) {
  for(let value in obj) {
    if( typeof obj[value] === 'number') {
      obj[value] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
