let vector = new Array();

function numerosPares(vector) {
    let x = 2
    for (let i = 0; i < 10; i++) {
        vector[i] = x;
        x += 2;
    }
}

function mostrar(vector) {
    console.log(vector);
}

function girarDerecha(vector) {
    let extension = vector.length - 1;
    let x = vector[extension];
    for (let i = extension; i >= 0; i--) {
        let z = vector[i - 1];
        vector[i] = z;
    }
    vector[0] = x;
}

function girarIzquierda(vector) {
    let extension = vector.length;
    let x = vector[0];
    for (let i = 0; i < extension; i++) {
        let z = vector[i + 1];
        vector[i] = z;
    }
    vector[vector.length - 1] = x;
}

function invertir(vector) {
    let extension = vector.length - 1;
    let x = Math.round(extension / 2);
    let primerNum = vector[0];
    let ultimoNum = vector[extension];
    for (let i = 0; i < x; i++) {
        vector[i] = ultimoNum;
        vector[extension] = primerNum;
        extension -= 1;
        primerNum = vector[i + 1];
        ultimoNum = vector[extension];
    }
}

numerosPares(vector);
console.log(vector);

girarDerecha(vector);
console.log(vector);

girarIzquierda(vector);
console.log(vector);

invertir(vector);
console.log(vector);