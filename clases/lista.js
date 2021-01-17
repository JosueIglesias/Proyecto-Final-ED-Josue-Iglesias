import Arbol from "./arbol.js"
import Nodo from "./nodo.js"

export default class Lista {

    constructor(){
        this.inicio = null
    }
    
    agregar(nuevo){
        if (this.inicio === null){
            this.inicio = nuevo
        } else {
            let t = this.inicio
            while (t.siguiente != null){
                t = t.siguiente
            }
            t.siguiente = nuevo
            t.siguiente.anterior = t
        }
    }

    eliminar(num) {
        let t = this.inicio
        if (this.inicio === num){
            this.inicio = this.inicio.siguiente
            this.inicio.anterior = null
        } else {
            while (t.siguiente != num){
                t = t.siguiente
            }
    
            if (t.siguiente === num){
                t.siguiente = t.siguiente.siguiente
                if (t.siguiente != null){
                    t.siguiente.anterior = t
                }
            } /*else {
                alert ('Producto no encontrado')
                return false
            }*/
        } 
    }

    recorrer(operador1, operador2){
        let t = this.inicio
        while (t != null){
            if (t.valor === operador1 || t.valor === operador2 ) {
                let nodo = new Nodo
                //console.log(nodo.crearNodo(t))
                //console.log('esto es t222 sig:' + t.siguiente.valor)
                t.valor = nodo.crearNodo(t)
                this.eliminar(t.siguiente)
                this.eliminar(t.anterior)
                t = t.siguiente
            } else {
                t = t.siguiente
            }
        }
    }
}