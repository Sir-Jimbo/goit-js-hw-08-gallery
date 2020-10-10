//Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
//При нажатии на кнопку Очистить, коллекция элементов очищается.

const inputNumber = document.querySelector("#controls input");
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

//Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

//Каждый созданный div:

//Имеет случайный rgb цвет фона
//Размеры самого первого div - 30px на 30px
//Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

function createBoxes(amount) {
  let newDivs = [];
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.backgroundColor =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    newDivs.push(newDiv);
  }
  boxes.append(...newDivs);
}

//Создай функцию destroyBoxes(), которая очищает div#boxes.
function destroyBoxes() {
  boxes.innerHTML = "";
}

renderBtn.addEventListener("click", () => createBoxes(inputNumber.value));
destroyBtn.addEventListener("click", destroyBoxes);
