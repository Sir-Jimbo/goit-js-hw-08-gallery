//Напиши скрипт

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

//который, при наборе текста в инпуте input#name - input(событие input),
//подставляет его текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

function inputChange(event) {
  nameInput.value
    ? (nameOutput.textContent = event.currentTarget.value)
    : (nameOutput.textContent = "незнакомец");
}

nameInput.addEventListener("input", inputChange);
