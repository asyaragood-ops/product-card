// задача 3

let getTemperature = (city, temp) => { // создание функции с 2-я параметрами
  console.log(`Сейчас в ${city} температура — ${temp} градусов по Цельсию`)  // выводл в консоль текста
};

getTemperature("Москве", 36); //вызов функции с аргументами



// задача 4

const LIGHT_SPEED = 299792458;

let getSpeed = (speed) => {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
  } else if (speed < LIGHT_SPEED) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  };
};

getSpeed(299792458);



// задача 5

let product = "Продукт";
let price = 350;

let purchaseProduct = (budget) => {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    let difference = price - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
};

purchaseProduct(350);



// задача 6

let whatever = () => {};



// задача 7

const PI = 3.14;
let number = 5;
var name = "Саид";