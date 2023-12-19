// const message = 'hello';
// console.log(message.length);
// console.log(message.indexOf('q'));

//  const firstName = 'lera';
//  const lastName = ' kochuma';
//  const fullname = `hello, ${firstName} ${lastName}`;
//  console.log(fullname);

// const firstName = 'Mango';
// const lastName = 'Lee';
// const room = 716;
// const type = 'VIP';

// const customersMsg = `Гість ${firstName} ${lastName} поселяється в ${type} номер ${room}`;

// console.log(customersMsg);


// const firstllame = prompt("Your name");
// const lasthame = prompt("Your surname");
// const age = prompt('Your age');
// const text = "Користувач ${firstName} ${lastName} віком ${age} має доступ до аккаутну!";
// console.log(text);

/*
 * Пошук в рядку з методом includes()
 */


// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'розпродаж';

// const string1 = 'Привіт, я Марк Цукерберг, це не спам, пропоную тобі мільйон!';
// const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
// const string3 = 'Рекламна кампанія #jsIsAwesome';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// console.log(string2.toLocaleLowerCase().includes(blacklistedWord2.toLocaleLowerCase()));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));\



// const name = "Lera";
// console.log("Кількість символів у рядку:", name.length);



// const myName = "Lera";
// const uppercasedName = myName.toUpperCase();
// console.log("Результат:", uppercasedName);



// const myName = "Lera";
// console.log(name.charAt(0));



//  const name = "Lera Kochuma";
//  console.log(name.indexOf(" "));

//  console.log(name.replace("L", "@"));


// const word = "JavaScript";
// console.log(word.substring(0, 4));


/*
 * Напиши скрипт який перевірить входження 
 * числа у відрізок зазначений x1 та x2. *
 * - До x1
 * - Після x2
 * - Від x1 до x2
 * - До x1 або після x2
 */
//                  10                      30 
// ================================================================
//                  x1                      x2
// const x1 = 10;
// const x2 = 30;
// const number = 40;

// console.log(`Число ${number} потрапляє у відрізок до ${x1}? ` , number < x1 );

// console.log(`Число ${number} потрапляє у відрізок після ${x2}? ` , number > x2);

//  console.log(`Число ${number} потрапляє у відрізок від ${x1} до ${x2}?`, number > x1 && number < x2);

//  console.log(`Число ${number} потрапляє у відрізок до ${x1} або після ${x2}?`, x1 > number || number > x2); 



/*
 * Напиши скрипт перевірки підписки користувача під час доступу до контенту
 * - Є три типи підписки: free, pro и vip.
 * - Отримати доступ можуть тільки pro и vip
 */

const sub = 'vip';


// якщо користувач pro або користувач vip тоді є доступ

 const canAccessContent = sub === 'pro' || sub === 'vip';
 
 console.log('Є доступ до контенту? ', canAccessContent);