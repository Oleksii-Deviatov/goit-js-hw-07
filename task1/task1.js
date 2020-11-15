// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//   Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2)
//  и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


const liArray = document.querySelectorAll('ul#categories li.item');
console.log(`В списке ${liArray.length} категории`);

liArray.forEach(elem => {
  console.log(`Категория: ${elem.firstElementChild.textContent}`);// как на меня это не читабально, тем более если поменяется разметка, все равно это работат не будет
  // console.log(`Категория: ${elem.querySelector('h2').textContent}`); // а вот тут понятно что я вывожу
  console.log(`Количество элементов: ${elem.lastElementChild.children.length}`); // как на меня это не читабально
  // console.log(`Количество элементов: ${elem.querySelectorAll('li').length}`); // а вот тут понятно что я вывожу
  console.log();
})

