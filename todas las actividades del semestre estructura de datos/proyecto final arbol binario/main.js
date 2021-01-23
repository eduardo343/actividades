require('./Expresion');
const math = require('mathjs-expression-parser');
 
// E D I T A R   E X P R E S I O N  
const expr = '4+5+3*2*6-8*3/6'; //De igual forma aquí debera establecer la misma expresión que en el archivo Expresion.js

console.log('-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-');

console.log('Resultado de la expresión: \r');
console.log(math.eval(expr, {}));

console.log;('-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-')