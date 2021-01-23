class ListaCircular{
    constructor(){
        this.inicio==null;
    }

    agregar(nuevo){
        if(this.inicio === null){
            this.inicio = nuevo;
        }else{
            let aux = this.inicio;
            while(aux.siguiente !== this.inicio){
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
        }
        nuevo.siguiente = this.inicio;
    }

    avanzar(){
        if(this.inicio!=null)
            this.inicio=this.inicio.siguiente;
    }

    eliminarInicio(){
        if(this.inicio!=null){
            if (this.inicio.siguiente==this.inicio){
                this.inicio=null;
            }else{
               let aux = this.inicio;
                while(aux.siguiente!==this.inicio){
                    aux = aux.siguiente;
                }
                    aux.siguiente = this.inicio.siguiente;
                    this.inicio = this.inicio.siguiente;
                
            }
        }
   }
}