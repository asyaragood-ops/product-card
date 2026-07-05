// Задача 3. Создание объекта.

let user = {
  name: "Саид",
  surname: "Абдрашитов",
  mail: "said_abdrashitov@gmail.com",
  job: "developer",
  post: "frontend developer",
  age: 20,
  country: "Russia",
  city: "Moscow"
};

  console.log(user);



// Задача 4. Добавление дополнительного свойства в объект.

let car = {
  brand: "Toyota",
  model: "Rav 4",
  year: 2012,
  color: "black",
  transmission: "manual"
};

  car.owner = user.name;

  console.log(car);



// Задача 5. Функция для проверки свойства в объекте.

  function hasMaxSpeed() {
  if (!(Object.hasOwn(car, 'maxSpeed'))) {
    car.maxSpeed = 120;
  };
};

hasMaxSpeed();



// Задача 6. Функция для вывода значения свойства объекта.

function showUserCity (obj, city) {
  console.log(city);
};

showUserCity(user, user.city);



// Задача 7. Создание массива.

let products = ["orange", "apple", "banana", "pinneapple", "watermelon"];

console.log(products);



// Задача 8. Массив из объектов.

let books1 = [
  {
    name: "Война и мир",
    author: "Лев Николаевич Толстой",
    year: 1868,
    color: "yellow",
    genre: "novel"
  },

  {
    name: "Преступление и наказание",
    author: "Фёдор Михайлович Достоевский",
    year: 1866,
    color: "black",
    genre: "novel"
  },

  {
    name: "Капитанская дочка",
    author: "Александр Сергеевич Пушкин",
    year: 1836,
    color: "blue",
    genre: "story"
  }
];

  console.log(books1);



// Задача 9. Объединение массивов.

let books2 = [
  {
    name: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: 1997,
    color: "red",
    genre: "fantasy"
  },

  {
    name: "Гарри Поттер и Тайная комната",
    author: "Джоан Роулинг",
    year: 1998,
    color: "purple",
    genre: "fantasy"
  }
];

let books = [...books1, ...books2];

  console.log(books);



// Задача 10. Добавление свойства в объект массива

function isBookRare(obj) {
  if (obj.year > 1900) {
    obj.isRare = false;
  } else {
    obj.isRare = true;
  };
};

books.map(isBookRare);

console.log(books);