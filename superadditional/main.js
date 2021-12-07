//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
            			let users = [{
            				name: 'vasya',
            				age: 31,
            				status: false,
            				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			}, {
            				name: 'petya',
            				age: 30,
            				status: true,
            				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			}, {
            				name: 'kolya',
            				age: 29,
            				status: true,
            				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			}, {
            				name: 'olya',
            				age: 28,
            				status: false,
            				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			}, {
            				name: 'max',
            				age: 30,
            				status: true,
            				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			}, {
            				name: 'anya',
            				age: 31,
            				status: false,
            				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			}, {
            				name: 'oleg',
            				age: 28,
            				status: false,
            				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			}, {
            				name: 'andrey',
            				age: 29,
            				status: true,
            				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			}, {
            				name: 'masha',
            				age: 30,
            				status: true,
            				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			}, {
            				name: 'olya',
            				age: 31,
            				status: false,
            				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			}, {
            				name: 'max',
            				age: 31,
            				status: true,
            				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
            			}];
// let addressArr = [];
// for (const user of users) {
// 	let clone = Object.assign({}, user);
// 	let addres = clone.address;
// 	addressArr.push(addres);
// }
// let wrapDiv = document.createElement('div');
// document.body.appendChild(wrapDiv);
// for (const user of users) {
// 	let userWrap = document.createElement('div');
// 	let nameDiv = document.createElement('div');
// 	nameDiv.innerText = `${user.name}`;
// 	let ageDiv = document.createElement('div');
// 	ageDiv.innerText = `${user.age}`;
// 	let addressDiv = document.createElement('div');
// 	let cityDiv	= document.createElement('div');
// 	cityDiv.innerText = `${user.address.city}`;
// 	let countryDiv = document.createElement('div');
// 	countryDiv.innerText = `${user.address.country}`;
// 	let streetDiv = document.createElement('div');
// 	streetDiv.innerText = `${user.address.street}`;
// 	let houseNumberDiv = document.createElement('div');
// 	houseNumberDiv.innerText = `${user.address.houseNumber}`;
// 	wrapDiv.appendChild(userWrap);
// 	userWrap.appendChild(nameDiv);
// 	userWrap.appendChild(ageDiv);
// 	if (user.status){
// 		let statusDiv = document.createElement('div');
// 		userWrap.appendChild(statusDiv);
// 	}
// 	userWrap.appendChild(addressDiv);
// 	addressDiv.appendChild(cityDiv);
// 	addressDiv.appendChild(countryDiv);
// 	addressDiv.appendChild(streetDiv);
// 	addressDiv.appendChild(houseNumberDiv);
// }

//- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let allTitle = document.getElementsByClassName('rules');
// let contentDiv = document.getElementById('content');
// let ulContentDiv = document.createElement('ul');
// for (const item of allTitle) {
// 	let listTitle = document.createElement('li');
// 	listTitle.innerText = item.children[0].innerText
// 	ulContentDiv.appendChild(listTitle);
// }
// contentDiv.appendChild(ulContentDiv);


//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// let wrapRulse = document.createElement('div');
// wrapRulse.setAttribute('id', 'wrap_1');
//
// for (let i = 0; i < rules.length; i++) {
// 	let ruleDiv = document.createElement('div');
// 	ruleDiv.classList.add('rules');
// 	ruleDiv.classList.add(`rule${i + 1}`);
// 	let titleRuleDiv = document.createElement('h2');
// 	titleRuleDiv.innerText = rules[i].title;
// 	let paragrafRuleDiv = document.createElement('p');
// 	paragrafRuleDiv.innerText = rules[i].body;
// 	wrapRulse.appendChild(ruleDiv);
// 	ruleDiv.appendChild(titleRuleDiv);
// 	ruleDiv.appendChild(paragrafRuleDiv);
// }
// document.body.appendChild(wrapRulse);
