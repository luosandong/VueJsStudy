// import {
//     name,
//     func,
//     Person,
//     Dom
// } from './js/modulea.js'

// console.log(name);
// func();

// let person = new Person('LSD');
// console.log(person.name);
// let dom = new Dom('tom', 32);
// dom.show();

// 以上方法导入 需要一个一个写太麻烦

// 可以采用通配符导入  将模块定义为一个程序集 起名叫mo 
import * as mo from './js/modulea.js'


document.getElementById('info').value = mo.name;
console.log(mo.name);
mo.func();
let person = new mo.Person('LSD');
console.log(person.name);
let dom = new mo.Dom('tom', 32);
dom.show();