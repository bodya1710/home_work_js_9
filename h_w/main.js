//Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let wrapDiv = document.createElement('div');
// wrapDiv.classList.add('wrap');
// wrapDiv.classList.add('collapse');
// wrapDiv.classList.add('alpha');
// wrapDiv.classList.add('beta');
// wrapDiv.style.color = 'red';
// wrapDiv.style.backgroundColor = 'black';
// wrapDiv.style.width = '700px';
// document.body.appendChild(wrapDiv);
// let clonwrapDiv = wrapDiv.cloneNode(true);
// document.body.appendChild(clonwrapDiv);


// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let arr = ['Main','Products','About us','Contacts'];
// let menu = document.getElementsByClassName('menu')[0];
// for (const item of arr) {
//     let li = document.createElement('li');
//     li.innerText = `${item}`
//     menu.appendChild(li);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const item of coursesAndDurationArray) {
//     let wrapDiv = document.createElement('div');
//     wrapDiv.innerText = `${item.title}  ${item.monthDuration}`;
//     document.body.appendChild(wrapDiv);
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
// for (const item of coursesAndDurationArray) {
//     let wrapDiv = document.createElement('div');
//     wrapDiv.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = `${item.title}`;
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = `${item.monthDuration}`;
//
//     document.body.appendChild(wrapDiv);
//     wrapDiv.appendChild(h1);
//     wrapDiv.appendChild(p);
// }