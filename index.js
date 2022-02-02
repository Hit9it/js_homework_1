// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let zmin1 = 'hello';
let zmin2 = 'owu';
let zmin3 = 'com';
let zmin4 = 'ua';
let zmin5 = 1;
let zmin6 = 10;
let zmin7 = -999;
let zmin8 = 123;
let zmin9 = 3.14;
let zmin10= 2.7;
let zmin11= 16;
let zmin12= true;
let zmin13= false;

console.log(zmin1+'\n'+zmin2+'\n'+zmin3+'\n'+zmin4+'\n'+zmin5+'\n'+zmin6+'\n'+zmin7+'\n'+zmin8+'\n'+zmin9+'\n'+zmin10+'\n'+zmin11+'\n'+zmin12+'\n'+zmin13);
alert(zmin1+'\n'+zmin2+'\n'+zmin3+'\n'+zmin4+'\n'+zmin5+'\n'+zmin6+'\n'+zmin7+'\n'+zmin8+'\n'+zmin9+'\n'+zmin10+'\n'+zmin11+'\n'+zmin12+'\n'+zmin13);
document.write(zmin1+'\n'+zmin2+'\n'+zmin3+'\n'+zmin4+'\n'+zmin5+'\n'+zmin6+'\n'+zmin7+'\n'+zmin8+'\n'+zmin9+'\n'+zmin10+'\n'+zmin11+'\n'+zmin12+'\n'+zmin13);

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

zmin1 = 213;
zmin2 = 'wdwdw';
zmin3 = 'wdwefx';
zmin4 = 'wwwww';
zmin5 = 12345;
zmin6 = 0.3;
zmin7 = 123.132;
zmin8 = true;
zmin9 = false;
zmin10= 222;
zmin11= 333;
zmin12= 444;
zmin13= 'ewewed';

console.log(zmin1+'\n'+zmin2+'\n'+zmin3+'\n'+zmin4+'\n'+zmin5+'\n'+zmin6+'\n'+zmin7+'\n'+zmin8+'\n'+zmin9+'\n'+zmin10+'\n'+zmin11+'\n'+zmin12+'\n'+zmin13);
alert(zmin1+'\n'+zmin2+'\n'+zmin3+'\n'+zmin4+'\n'+zmin5+'\n'+zmin6+'\n'+zmin7+'\n'+zmin8+'\n'+zmin9+'\n'+zmin10+'\n'+zmin11+'\n'+zmin12+'\n'+zmin13);
document.write(zmin1+'\n'+zmin2+'\n'+zmin3+'\n'+zmin4+'\n'+zmin5+'\n'+zmin6+'\n'+zmin7+'\n'+zmin8+'\n'+zmin9+'\n'+zmin10+'\n'+zmin11+'\n'+zmin12+'\n'+zmin13);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

let firstName = 'Андрій';
let middleName = 'Володимирович';
let lastName = 'Коверзнєв';

let person = lastName+firstName+middleName;
console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let age = 20;
prompt('Вітаю, '+firstName+' '+middleName+'. Тобі '+age+' років');

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a+'\n'+ typeof b+'\n'+typeof c)

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
//     5 < 6 -> true
//     5 === 6 -> false
//     5 == 6 -> false
//     5 > 6 -> false
//     10 === 10 -> true
//     10 == 10 -> true
//     10 > 10 -> false
//     10 !=== 10 -> false
//     10 !== 10 -> false
//     123 === '123' -> false
//     123 == '123' -> true

// let str = "20";
// let  a = 5;
// document.write(str + a + "<br/>");       =205
// document.write(str - a + "<br/>");       =15
// document.write(str * "2" + "<br/>");     =40
// document.write(str / 2 + "<br/>");       =10