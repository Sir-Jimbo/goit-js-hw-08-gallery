//Напиши скрипт,

const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

console.log(fontSizeControl.value);

//который реагирует на изменение значения input#font - size - control(событие input)
//и изменяет инлайн - стиль span#text обновляя свойство font - size.
//В результате при перетаскивании ползунка будет меняться размер текста.

function fontSizeChange() {
  text.setAttribute("style", `font-size: ${fontSizeControl.value}px`);
}

fontSizeControl.addEventListener("input", fontSizeChange);
