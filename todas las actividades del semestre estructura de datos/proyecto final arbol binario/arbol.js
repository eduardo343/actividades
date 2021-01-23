const Nodo = require('./Nodo')._proyect;

class Arbol{
  constructor(){
      this.inicio = null;
  }

  nulo(){
      return this.inicio === null;
  }

  agregar(nuevoNodo, node = this.inicio){
      if(!node){
          this.inicio = new Nodo(nuevoNodo);
          return;
      }

      if(nuevoNodo < node.nuevoNodo){
          if(node.izquierda){
              return this.agregar(nuevoNodo, node.izquierda);
      }
      node.izquierda = new Nodo(nuevoNodo);
      return;
      } else{ 
          if(node.derecha){
              return this.agregar(nuevoNodo, node.derecha);
          }
          node.derecha = new Nodo(nuevoNodo);
          return;
      }
  }
  
  preorden(node = this.inicio){
      if(!node){
          return;
      }
      console.log(node.nuevoNodo);
      this.preorden(node.izquierda);
      this.preorden(node.derecha);
  }
  
  postorden(node = this.inicio){
      if(!node){
          return;
      }
      this.postorden(node.izquierda);
      this.postorden(node.derecha);
      console.log(node.nuevoNodo);
  }
}

module.exports._proyect = Arbol;