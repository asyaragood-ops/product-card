import { items } from "./product-item.js";


const itemTemplate = document.getElementById('item-template');
const itemList = document.querySelector('.product-card');
const RUBLE_SIGN = '\u{20BD}';

function getCardCount() {
  for(;;) {
        const input = prompt("Сколько карточек отобразить? От 1 до 5");
    let count = Number(input);

    if (count >= 1 && count <= 5) {
      return count;
    } else {
      alert("Ошибка! Пожалуйста, введите число от 1 до 5.");
    }
  }
}


function renderCards(array, count) {
  const cardsToRender = array.slice(0, count);
  console.log(`Отображаем ${cardsToRender.length} карточек:`);

  cardsToRender.forEach(item => {
    console.log(`Рендерю карточку: ${item.name}`);

    const itemClone = itemTemplate.content.cloneNode(true);
    itemClone.querySelector('.product-card__image').src = `images/${item.image}.png`;
    itemClone.querySelector('.product-card__image').alt = item.name;
    itemClone.querySelector('.product-card__kind').textContent = item.kind;
    itemClone.querySelector('.product-card__title').textContent = item.name;
    itemClone.querySelector('.product-card__description').textContent = item.description;
  
    const compoundList = itemClone.querySelector('.ingredients');
    item.ingredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.className = 'compound__ingredient';
      li.textContent = ingredient;
      compoundList.appendChild(li);
    });

  itemClone.querySelector('.product-card__value').textContent = `${item.price} ${RUBLE_SIGN}`;
  itemList.appendChild(itemClone);
  });
};

const count = getCardCount();
renderCards(items, count);

const reducedProductCards = items.reduce((acc, item) => {
  acc.push({
      [item.title]: item.description
  })
  return acc
}, [])
console.log(reducedProductCards)