// V A R I A B L E S 
var btnAgregar = document.querySelector('#btnAgregar');
var btnAgregarInicio = document.querySelector('#btnAgregarInicio');
var btnBorrarPrimero = document.querySelector('#btnBorrarPrimero');
var btnBorrar = document.querySelector('#btnBorrar');
var btnBuscar = document.querySelector('#btnBuscar');
var btnListar = document.querySelector('#btnListar');
var btnListarInverso = document.querySelector('#btnListarInverso');

// L I S T A 
var lista = document.querySelector("#lista");

class Producto {
    constructor(nombre, codigo, descripcion, cantidad, coste) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.coste = coste;
        this.siguiente = null;
    }
    valorMercancia() {
        let cantidad = this.cantidad;
        let coste = this.coste;
        let valor = cantidad * coste;
        return valor;
    }
    articleToHtml() {
        let productString = '<li class="list-group-item">';
        for (let key in this) {
            productString += `<div>${key}: ${this[key]}</div>`;
        }
        let valor_string = `<div>Valor mercancia: ${this.valorMercancia()}</div>`;
        return productString + valor_string + "</li>";
    }
}

class Bodega {
  constructor(){
    this.inicio = null;
    this.tamaño = 0;
  }

    agregarProducto(nuevo) {
        if(this.inicio === null){
            this.inicio = nuevo;
        }else{
            let aux = this.inicio;
            while(aux.siguiente !== null){
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
        }
        this.tamaño++;
        this.listado();
    }

    posicionProducto(nuevo, posicion){
        if(this.inicio == null){
            return false;
        }
        let aux = this.inicio;
        while (aux != null){
            if (nuevo.codigo == aux.codigo){
                return false;
            }
            aux = aux.siguiente;
        }
        aux = this.inicio;
        let i = 1;
        while(i < posicion - 1 && aux != null){
            aux = aux.siguiente;
            i++;
        }
        if(aux == null){
            return false;
        }
        let temp = aux.siguiente;
        aux.siguiente = nombre;
        aux.siguiente.siguiente = temp;   
        this.listado(); 
  }

    borrarProducto(codigo) {
        let aux = this.inicio;
        let temp = null;

        while(aux != null){
            if(aux.codigo === codigo){
                if(!temp){
                    this.inicio = aux.siguiente;
                } else{
                    temp.siguiente = aux.siguiente;
                }
                this.tamaño--;
                this.listado();
                return aux.codigo;
            }
            temp = aux;
            aux = aux.siguiente;
        }
        return null;
    }

    buscarProducto(codigo) {
        if(this.inicio == null){
          return null;
        }
        let aux = this.inicio;
        while(aux){
          if(aux.codigo == codigo){
            return (aux);
          }
          aux = aux.siguiente;
        }
        return null; 
    }

    listado() {
        lista.innerHTML = "";
        if(this.tamaño === 0){
            return null;
        }
        let aux = this.inicio;
        while(aux){
            lista.innerHTML += aux.articleToHtml();
            aux = aux.siguiente;
        }
    }

    listadoInvertido() {
        lista.innerHTML = "";
        if(this.inicio == null){
            return null;
        }
        let aux = this.inicio;
        while(aux !== null){
            lista.innerHTML += aux.articleToHtml();
            aux = aux.siguiente;
        }
    }

    agregarAlInicio(nombre){
      let aux = this.inicio;
      while(aux != null){
          if (aux.codigo == nombre.codigo){
              return null;
          }
          aux = aux.siguiente;
      }
      nombre.siguiente = this.inicio;
      this.inicio = nombre;
      this.listado();
    }

    eliminarInicio(){
        let aux = this.inicio;
        this.inicio = this.inicio.siguiente;
        aux.siguiente = null;
        this.listado()
        return aux;
    }
}

//L I S T A S  D E  E V E N T O S 

let bodega = new Bodega();

// B O T O N  A G R E G A R
btnAgregar.addEventListener("click", () => {
    let nombre1 = (document.querySelector('#nombre'));
    let codigo1 = (document.querySelector('#codigo'));
    let descripcion1 = (document.querySelector('#descripcion'));
    let cantidad1 = (document.querySelector('#cantidad'));
    let coste1 = (document.querySelector('#coste'));
    let posicion1 = (document.querySelector('#posicion'));
    if(posicion1.value == ""){
      let bodega1 = new Producto(nombre1.value, codigo1.value, descripcion1.value, cantidad1.value, coste1.value);
      bodega.agregarProducto(bodega1);
    }else{
      let bodega1 = new Producto(nombre1.value, codigo1.value, descripcion1.value, cantidad1.value, coste1.value);
      bodega.posicionProducto(bodega1);  
    }
});

// B O T O N  A G R E G A R  A L  I N I C I O
btnAgregarInicio.addEventListener("click", () => {
  let nombre1 = (document.querySelector('#nombre'));
  let codigo1 = (document.querySelector('#codigo'));
  let descripcion1 = (document.querySelector('#descripcion'));
  let cantidad1 = (document.querySelector('#cantidad'));
  let coste1 = (document.querySelector('#coste'));
  let posicion1 = (document.querySelector('#posicion'));
  let bodega1 = new Producto(nombre1.value, codigo1.value, descripcion1.value, cantidad1.value, coste1.value);
  bodega.agregarAlInicio(bodega1);
});

// B O T O N  B O R R A R  E L  P R I M E R O
btnBorrarPrimero.addEventListener("click", () => {
  bodega.eliminarInicio();

});

// B O T O N  B O R R A R
btnBorrar.addEventListener("click", () => {
    var borrarPorCodigo = document.querySelector("#borrarPorCodigo");
    bodega.borrarProducto(borrarPorCodigo.value);

});

// B O T O N  B U S C A R
btnBuscar.addEventListener("click", () => {
    var buscarPorCodigo = document.querySelector("#buscarPorCodigo");
    bodega.buscarProducto(buscarPorCodigo.value);

});

// B O T O N  L I S T A R
btnListar.addEventListener("click", () => {
    bodega.listado();
});

// B O T O N  L I S T A R I N V E R S O
btnListarInverso.addEventListener("click", () => {
    bodega.listadoInvertido();
});