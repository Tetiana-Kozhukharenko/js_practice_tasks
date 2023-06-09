// 1.Користувач вводить два числа, потрібно вивести максимальне з них. Слід врахувати що числа можуть бути рівними.

let number1 = prompt('Введіть перше число:', '');
while (number1.trim() == '' || isNaN(+number1)) {
  number1 = prompt('Ви ввели не число, введіть будь ласка число:', '');
}

let number2 = prompt('Введіть друге число:', '');
while(number2.trim() == '' || isNaN(+number2)) {
  number2 = prompt('Ви ввели не число, введіть будь ласка число:', '');
}

if (number1 == number2){
  alert('Ви ввели однакові числа!');
}else{
  const maxNumber = Math.max(number1, number2);
  alert(`Більше число: ${maxNumber}`);
}

/* 2.У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90. Користувач вводить номер 
квартири. Програма повинна зазначити, в якому під'їзді знаходиться введена квартира. */

let numberApartment = prompt('Введіть номер квартири:');
while (numberApartment.trim() == '' || isNaN(+numberApartment) || numberApartment <= 0 || numberApartment > 90) {
  numberApartment = prompt('Введіть номер квартири від 1 до 90:', '');
}

if (numberApartment <= 20) {
  alert("Вам потрібен перший під'їзд!");
} else if(numberApartment >= 21 && numberApartment <= 48) {
  alert("Вам потрібен другий під'їзд!");
} else {
  alert("Вам потрібен третій під'їзд!");
}
