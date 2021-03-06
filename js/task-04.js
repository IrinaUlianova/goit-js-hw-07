/*Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса*/
let counterValue = 0;
const valueRef = document.querySelector(" #value");

const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);

const onClickIncrement = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
  console.log(counterValue);
};
const onClickDecrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};
incrementBtnRef.addEventListener("click", onClickIncrement);
decrementBtnRef.addEventListener("click", onClickDecrement);
