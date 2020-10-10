//Напиши скрипт, который бы при потере фокуса на инпуте,
//проверял его содержимое на правильное количество символов.
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым,
//если неправильное - красным.

const validationInput = document.querySelector("#validation-input");
const dataLength = Number(validationInput.dataset.length);

function validationInputBlur() {
  if (validationInput.value.length === dataLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}

validationInput.addEventListener("blur", validationInputBlur);
