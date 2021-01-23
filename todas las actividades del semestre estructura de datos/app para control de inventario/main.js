// V A R I A B L E S 
var btnAgregar = document.querySelector('#btnAgregar');
var btnBorrar = document.querySelector('#btnBorrar');
var btnBuscar = document.querySelector('#btnBuscar');
var btnListar = document.querySelector('#btnListar');
var btnListarInverso = document.querySelector('#btnListarInverso');

// L I S T A 
var lista = document.querySelector("#lista");

// V E C T O R
var v1 = new Array()
var maximo = 20;

class Producto {
    constructor(nombre, codigo, descripcion, cantidad, coste) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.coste = coste;
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
    agregarProducto(nombre) {
        if (v1.length >= maximo) {
            return;
        } else {
            v1.push(nombre);
            this.listado();
            return
        }
    }

    borrarProducto(productoBorrar) {
        for (let i = 0; i < v1.length; i++) {
            if (productoBorrar == v1[i].codigo) {
                let borrar = v1[i].nombre;
                v1[i] = null;
                borrarPorCodigo.value = "";
                this.listado();
                return borrar;
            }
        }
    }

    buscarProducto(productoBuscar) {
        for (let i = 0; i < v1.length; i++) {
            if (productoBuscar == v1[i].codigo) {
                lista.innerHTML = v1[i].articleToHtml();
                return v1[i].nombre;
            }
        }
    }

    listado() {
        lista.innerHTML = "";
        for (let i = 0; i < v1.length; i++) {
            if (v1[i]) {
                lista.innerHTML += v1[i].articleToHtml();
            }
        }
    }

    listadoInvertido() {
        lista.innerHTML = "";
        for (let i = v1.length - 1; i >= 0; i--) {
            if (v1[i]) {
                lista.innerHTML += v1[i].articleToHtml();
            }
        }
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
    let bodega1 = new Producto(nombre1.value, codigo1.value, descripcion1.value, cantidad1.value, coste1.value);
    bodega.agregarProducto(bodega1);
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