// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const ref = {
    inputRange: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}
ref.text.style.fontSize = `${ref.inputRange.value}px`
ref.inputRange.addEventListener('input', (e) => ref.text.style.fontSize = `${e.target.value}px`);



