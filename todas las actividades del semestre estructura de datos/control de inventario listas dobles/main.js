// V A R I A B L E S 
var btnAgregar = document.querySelector('#btnAgregar');
var btnBorrar = document.querySelector('#btnBorrar');
var btnBuscar = document.querySelector('#btnBuscar');
var btnListar = document.querySelector('#btnListar');
var btnListarInverso = document.querySelector('#btnListarInverso');
var btnBorrarPrimero = document.querySelector('#btnBorrarPrimero');

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
        this.anterior = null;
    }
    valorMercancia() {
        let valor = this.cantidad * this.coste;
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
    this.ultimo = null;
    this.tamaño = 0;
  }

    agregarProducto(nuevo) {
        if(!this.inicio){
            this.inicio = nuevo;
            this.ultimo = nuevo;
            return (nuevo, this.listado());
        }else if(nuevo.codigo < this.inicio.codigo){
            let aux = this.inicio;
            this.inicio = nuevo;
            this.inicio.siguiente = aux;
            aux.anterior = this.inicio;
            this.ultimo = aux;
            this.listado()
        }else{
            let aux = this.inicio;
            let x = false;
            while(!x){
                if(nuevo.codigo < aux.codigo){
                    nuevo.siguiente = aux;
                    nuevo.anterior = aux.anterior;
                    aux.anterior = nuevo;
                    nuevo.anterior.siguiente = nuevo;
                    if(aux.codigo === this.inicio.codigo){
                        nuevo.anterior = nuevo;
                        this.inicio = nuevo;
                    }
                    x = true;
                }else
                if(!aux.siguiente){
                    aux.siguiente = nuevo;
                    nuevo.anterior = aux;
                    this.ultimo = nuevo;
                    x = true;
                }else{
                    aux = aux.siguiente;
                }
            }
            this.listado();
        }
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
        lista.innerHTML = "";
        if(this.inicio !== null){
            let aux = this.inicio;
            
            while(aux != null){
                if(aux.codigo == codigo){
                    lista.innerHTML += aux.articleToHtml();
                }
                aux = aux.siguiente;
            }
        }
    }

    listado() {
        lista.innerHTML = "";
        let aux = this.inicio;
        while(aux){   
            lista.innerHTML += aux.articleToHtml();
            aux = aux.siguiente;
        }
    }

    listadoInvertido() {
        lista.innerHTML = "";
        let aux = this.ultimo;
        while(aux){
            lista.innerHTML += aux.articleToHtml();
            aux = aux.anterior;
        }
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
    let bodega1 = new Producto(nombre1.value, codigo1.value, descripcion1.value, cantidad1.value, coste1.value);
    bodega.agregarProducto(bodega1);
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