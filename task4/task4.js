// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const ref = {
    buttonDecrement: document.querySelector('[data-action="decrement"]'),
    buttonIncrement: document.querySelector('[data-action="increment"]'),
    htmlValue: document.querySelector('#value'),
}

let value = parseInt(ref.htmlValue.textContent);

function render() {
  ref.htmlValue.textContent = value;
}

function decremenet() {
    value -= 1;
    render();
}

function incremenet() {
    value += 1;
    render();
}

ref.buttonDecrement.addEventListener('click' , decremenet);
ref.buttonIncrement.addEventListener('click' , incremenet)





