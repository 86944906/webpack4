import mod1 from './mod1';
import '../css/index.css';
import '../less/1.less';
mod1.hi();

import mod2 from './mod2';

let json = {...mod2};
mod2.a1 = 1;
console.log(json);
console.log(mod2)
let a =5;
let b = 12;
let sum = (a,b) => a+b;

console.log(sum(a,b))

import * as mod3 from './mod3';
console.log(mod3.c)