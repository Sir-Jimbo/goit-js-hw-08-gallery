//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
let counterValue = 0;

//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
function increment() {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
}

//кнопки
const incrementBtn = document.querySelector(
  '#counter button[data-action = "increment"]'
);
const decrementBtn = document.querySelector(
  '#counter button[data-action = "decrement"]'
);

//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
