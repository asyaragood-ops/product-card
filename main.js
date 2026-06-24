//Перекрашивание первой карточки товара (задача 2)

const firstCard = document.querySelector('.product-card__item')
const changeColorButton = document.querySelector('#change-color')

changeColorButton.addEventListener('click', changeCardColor)

function changeCardColor() {
  firstCard.style.backgroundColor = '#eafdff'
}

//Перекрашивание всех карточек товара (задача 3)
const allCards = document.querySelectorAll('.product-card__item')
const changeAllCardsColorButton = document.querySelector('#change-color-all')

changeAllCardsColorButton.addEventListener('click', changeAllCardsColors)

function changeAllCardsColors() {
  allCards.forEach(card => {
    card.style.backgroundColor = '#ebffea'
  })
}

//Открыть google (задача 4)

const googleButton = document.querySelector('#google-bttn')
const googleURL = ('https://google.com')

googleButton.addEventListener('click', openGoogle)

function openGoogle() {
  window.open(googleURL)
}

//Вывод в консоль log и alert (задача 5)

const logAlertButton = document.querySelector('#log-alert-bttn')
let count = 0
logAlertButton.addEventListener('click', logAlert);

function logAlert() {
  count++
  console.log(count)

  window.alert('Вы нажали на эту кнопку ' + count + ' раз')
}

//Вывод в консоль заголовка при наведении (задача 6)

const title = document.querySelector('h1')
title.addEventListener('mouseover', titleHovering)

function titleHovering() {
  console.log(title.textContent)
}

//Кнопка повторного нажатия (задача 7)

const repeatButton = document.querySelector('#repeat-bttn')

repeatButton.addEventListener('click', buttonStyle)

function buttonStyle() {
  repeatButton.classList.toggle('action-bttns')
}

