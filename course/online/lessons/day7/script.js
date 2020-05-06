const price = 3000;
const percent = 100;
const discount = 50;

const greetings = "Привет, меня зовут Лика!"

const text = "Цена со скидкой:"

const discountMoney = price * discount / percent;
const priceWithDiscount = price - discountMoney;

console.log(`${text} ${priceWithDiscount} рублей`);

if (priceWithDiscount > 2000) {
  console.log('Маленькая скидка')
} else {
  console.log('Отличная скидка!')
}

document.write(greetings);

// alert('Не уходи с сайта!');
// const age = prompt('Сколько вам лет?', 30);
// if (age < 18) {
//   window.location.href = 'https://yandex.ru';
// } else {
//   console.log('Хорошо. Пользуйся сайтом!')
// }

const loveCat = confirm('Вы любите котиков?');
if (loveCat) {
  alert('Круто!!! Мы тоже')
} else {
  alert('Ужас. Не дружу с тобой')
}

// myName = "Text";

// snake_case
// lowerCamelCase
