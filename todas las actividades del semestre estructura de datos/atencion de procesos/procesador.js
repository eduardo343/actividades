const Tarea = require('./procesos').default;

// E S T A B L E C E R  P R O C E S A D O R
let Procesador = () => {
    let inicio = null;
    let tamaño = 0;
    let terminado = 0;
    let vacio = 0;
    let ultimo = null;

// A Ñ A D I R  T A R E A
    const creacionTarea = (tarea) => {
        if (inicio == null) {
            inicio = tarea;
            ultimo = tarea;
            inicio.siguiente = tarea;
        } else {
            tarea.siguiente = inicio;
            ultimo.siguiente = tarea;
            ultimo = tarea;
        }
    }

    const iniciar = () => {
        let numeroTarea = 1;
        for (let i = 0; i < 300; i++) {
            let x = Math.floor(Math.random() * (100-1)+1);
            if (inicio == null) {
                vacio ++;
            }
            if (x <= 39) {
                let tarea = new Tarea(numeroTarea);
                creacionTarea(tarea);
                numeroTarea++;
                tamaño++;
            }
            var aux = inicio;
            if (aux != null) {
                if (aux.numCiclos == 0) {
                    eliminar(aux);
                    tamaño--;
                    terminado++;
                }
                aux.numCiclos--;
                aux = aux.siguiente;
            }
            imprimir();
        }
    }

    const search = (aux) => {
        let actual = inicio;
        if (actual == aux) {
            return ultimo;
        } else {
            while (actual.siguiente != aux && ultimo != aux) {
                actual = inicio.siguiente;
            }
            return actual;
        }
    }

    const eliminar = (aux) => {
        let anterior = search(aux);
        if (aux == inicio && aux == ultimo) {
            inicio = null;
            ultimo = null;
        } else if (aux == inicio){
            inicio = aux.siguiente;
            ultimo.siguiente = inicio;
        } else if (aux == ultimo){
            anterior.siguiente = inicio;
            ultimo = anterior;
        } else
            anterior.siguiente = aux.siguiente;
    }

    const imprimir = () => {
        console.log(
            `
            Ciclos vacíos ${vacio},
            Proceso terminado ${terminado},
            Procesos pendientes ${tamaño}
            `
        );
    }
    return {iniciar:iniciar, imprimir:imprimir}
}



exports.default = Procesador;