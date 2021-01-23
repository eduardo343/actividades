// C R E A C I O N  D E  T A R E A
class Tarea {
    constructor(tarea){
        this.tarea = tarea;
        this.ciclo = Math.floor(Math.random() * (15 - 3)) + 3;
        this.siguiente = null;
    }
  }
  
  exports.default = Tarea;