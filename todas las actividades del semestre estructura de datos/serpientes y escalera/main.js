class Dado {
    tiro = 0;

    tirarDado() {
        this.tiro = Math.ceil(Math.random() * 6);
        return this.tiro;
    }

}

class Jugador {
    constructor(nombre, colorficha) {
        this.nombre = nombre;
        this.colorficha = colorficha;
    }

    avanzar() {
        let dado = new Dado();
        return dado.tirarDado();
    }
}

class Tablero {
    vectorTablero = new Array(
        0, 1, 18, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 47, 14, 15, 16, 1, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 14, 28, 29, 30,
        53, 32, 33, 34, 56, 36, 37, 38, 25, 40,
        41, 42, 43, 64, 45, 46, 47, 48, 49, 29,
        51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
        43, 62, 78, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74, 75, 33, 77, 78, 79, 80,
        96, 82, 83, 84, 74, 86, 91, 88, 89, 90,
        91, 92, 93, 94, 95, 96, 84, 98, 99, 100);

    verificarCasilla(casilla) {
        if (casilla <= 100) {
            return this.vectorTablero[casilla];
        } else {
            return 100;
        }
    }
}

class Juego {
    constructor() {
        this.meta = 100;
        this.j1 = new Jugador("Edson", "Rojo");
        this.j2 = new Jugador("Scarlett Johansson", "Azul");
        this.tablero = new Tablero();
        this.ganador = null;
    }

    iniciarJuego() {
        let x = 1;
        let contadorj1 = 0;
        let contadorj2 = 0;

        while (contadorj1 < 100 && contadorj2 < 100) {
            console.log('Turno #' + (x));
            contadorj1 += this.j1.avanzar();
            contadorj1 = this.tablero.verificarCasilla(contadorj1);
            console.log(this.j1.nombre, 'está en la casilla ' + contadorj1);

            contadorj2 += this.j2.avanzar();
            contadorj2 = this.tablero.verificarCasilla(contadorj2);
            console.log(this.j2.nombre, 'está en la casilla ' + contadorj2);
            console.log('------------------------------------------');

            x++;
        }

        if (contadorj1 >= this.meta) {
            this.ganador = "¡" + this.j1.nombre + " con la ficha de color " + this.j1.colorficha + " ha ganado!";
            console.log(this.ganador);
        } else if (contadorj2 >= this.meta) {
            this.ganador = "¡" + this.j2.nombre + " con la ficha de color " + this.j2.colorficha + " ha ganado!";
            console.log(this.ganador);
        }
    }
}
let app = new Juego();
app.iniciarJuego();