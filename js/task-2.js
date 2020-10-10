//Напиши скрипт,

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

//который для каждого элемента массива ingredients создаст отдельный li,

//Для создания DOM - узлов используй document.createElement().

const items = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  return li;
});

//после чего вставит все li за одну операцию в список ul.ingredients.
document.querySelector("#ingredients").prepend(...items);
