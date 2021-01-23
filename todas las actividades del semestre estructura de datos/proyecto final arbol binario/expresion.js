const Arbol = require ('./Arbol')._proyect;


  let nuevoArbolBinario = new Arbol();
  
  // E D I T A R   E X P R E S I O N  
  let expresionArit = [4, '+', 5, '+', 3, '*', 2, '*', 6, '-', 8, '*', 3, '/', 6] //En este array puede modificar el contenido para que pueda poner la expresión que guste
  // Tome de ejemplo el 2do ejercicio de los que nos dejo de preorder y postorder
  
  for (let i = 0; i < expresionArit.length; i++) {
    nuevoArbolBinario.agregar(expresionArit[i]);
  }
  
  // P R E O R D E R
  console.log('\nRecorrido PreOrder: ');
  nuevoArbolBinario.preorden();

  // P O S T O R D E R
  console.log('\nRecorrido PostOrder: ');
  nuevoArbolBinario.postorden();