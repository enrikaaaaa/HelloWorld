/* ------------------------------ TASK 5 ---------------------------------------------------
Sutvarkykite užduoties "Task 5" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

import { division } from './math/division.mjs';
import { substraction } from './math/substraction.mjs';
import { multiplication } from './math/multiplication.mjs';
import { composition } from './math/composition.mjs';
import { one, two, three, four, five } from './numbers/numbers.mjs';


const a = composition(one, four);  
const b = division(four, two); 
const c = substraction(three, two); 
const d = multiplication(five, two);  

console.log(a);
console.log(b);     
console.log(c);
console.log(d);

