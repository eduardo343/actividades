class Corredor {
    posicion = 0;

    correr(x) {
        this.posicion += x;
        return this.posicion;
    }

    probabilidad() {
        return Math.floor(Math.random() * 100) + 1;
    }
}

class Liebre extends Corredor {

    avanzar() {
        let pasos = 0;

        if (this.probabilidad() <= 20) {
            console.log("La liebre se durmió");
            pasos = 0;
        } else if (this.probabilidad() <= 40) {
            console.log("La liebre dió un salto grande");
            pasos = 9;
        } else if (this.probabilidad() <= 50 && this.posicion >= 12) {
            console.log("La liebre tuvó un resbalón grande");
            pasos = -12;
        } else if (this.probabilidad() >= 85 && this.posicion >= 2) {
            console.log("La liebre tuvó un resbalón pequeño");
            pasos = -2;
        } else if (this.probabilidad() <= 85) {
            console.log("La liebre dió un salto pequeño");
            pasos = 1;
        }
        console.log(`La liebre dió ${pasos} pasos`);
        return this.correr(pasos);
    }
}

class Tortuga extends Corredor {

    avanzar() {
        let pasos = 0;
        if (this.probabilidad() <= 50) {
            console.log("La tortuga dió un paso rápido");
            pasos = 3;
        } else if (this.probabilidad() <= 70 && this.posicion >= 6) {
            console.log("La tortuga tuvó resbalon");
            pasos = -6;
        } else {
            console.log("La tortuga dió un paso lento");
            pasos = 1;
        }
        console.log(`La tortuga avanzó ${pasos} pasos`);
        return this.correr(pasos);
    }
}

class Carrera {
    constructor(distancia = 90) {
        this.distancia = distancia;
        this.tortuga = new Tortuga();
        this.liebre = new Liebre();
        this.distancia = distancia;
        this.ganador = null;
    }

    inicioCarrera() {
        let recorridoTortuga;
        let recorridoLiebre;
        let x = 1
        while (!this.ganador) {
            console.log(`Ronda ${x}`);
            recorridoTortuga = this.tortuga.avanzar();
            console.log(`La tortuga ha recorrido: ${recorridoTortuga}`);

            recorridoLiebre = this.liebre.avanzar();
            console.log(`La liebre ha recorrido: ${recorridoLiebre}`);

            if (recorridoTortuga >= this.distancia && recorridoLiebre >= this.distancia) {
                this.ganador = "Empate";
            } else if (recorridoTortuga >= this.distancia) {
                this.ganador = "¡Ha ganado la Tortuga!";
            } else if (recorridoLiebre >= this.distancia) {
                this.ganador = "¡Ha ganado la Liebre!";
            }
            if (this.ganador) {
                console.log(this.ganador);
            }
            x++
        }
    }
}

let app = new Carrera();
console.log(app.inicioCarrera());  