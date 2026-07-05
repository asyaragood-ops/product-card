// задача 3

let logTemperature = (city, temp) => {
  console.log(`Сейчас в ${city} температура — ${temp} градусов по Цельсию`);
};

logTemperature("Москве", 36);



// задача 4

const LIGHT_SPEED = 299792458;

let checkSpeedType = (speed) => {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
  } else if (speed < LIGHT_SPEED) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  };
};

checkSpeedType(299792458);



// задача 5

let product = "Продукт";
let price = 350;

let buyProduct = (budget) => {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    let difference = price - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
};

buyProduct(350);



// задача 6

let empty = () => {};



// задача 7

const PI = 3.14;
let number = 5;
var name = "Саид";