// V A R I A B L E S 
var btnAgregar = document.querySelector('#btnAgregar');
var btnBorrar = document.querySelector('#btnBorrar');
var btnBuscar = document.querySelector('#btnBuscar');
var btnListar = document.querySelector('#btnListar');
var btnListarInverso = document.querySelector('#btnListarInverso');
let i = 0;

var v1 = new Array()

//L I S T A S  D E  E V E N T O S 
// B O T O N  A G R E G A R
btnAgregar.addEventListener('click', () => {

    let nombre = String(document.querySelector('#nombre').value);
    let codigo = Number(document.querySelector('#codigo').value);
    let descripcion = String(document.querySelector('#descripcion').value);
    let cantidad = Number(document.querySelector('#cantidad').value);
    let coste = Number(document.querySelector('#coste').value);
    let posicion = Number(document.querySelector('#posicion').value);

    if (v1[posicion] = undefined) {
        v1[posicion] = codigo;

        let ren = tabla.insertRow(-1);
        let col01 = ren.insertCell(0);
        let col02 = ren.insertCell(1);
        let col03 = ren.insertCell(2);
        let col04 = ren.insertCell(3);
        let col05 = ren.insertCell(4);
        let col06 = ren.insertCell(5);

        col01.textContent = posicion;
        col02.textContent = codigo;
        col03.textContent = nombre;
        col04.textContent = descripcion;
        col05.textContent = cantidad;
        col06.textContent = coste;

        console.log(v1);
    } else {
        alert('Esa posicion ya está ocupada');
    }
});