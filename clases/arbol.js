import Nodo from "./nodo.js"
import Lista from "./lista.js"
import Expresion from "./expresion.js"


export default class Arbol{
    constructor(){
        this.raiz = null
    }

    generar(lista){
        lista.recorrer('^','',)
        lista.recorrer('*', '/')
        lista.recorrer('+', '-')
        if(lista.inicio.siguiente === null) {
            this.raiz = lista.inicio.valor
        }
        return lista
    }

    inOrder(){
        if (this.raiz === null){
            console.log('No hay una raiz')
        } else{
            this.recInOrder(this.raiz)
        } 
    }

    recInOrder(r){
        if (r.hIzq != null){
            this.recInOrder(r.hIzq)
        }

        //esto aún no le encuentro una alternativa pero sé que la hay
        if(r.valor === undefined){
            console.log(r)
        } else {
            console.log(r.valor)
        }
        if (r.hDer!= null){
            this.recInOrder(r.hDer)
        }
    }

    /*
    PreOrder(lista){
        if (this.raiz === null){
            console.log('No hay una raiz')
        } else{
            this.recPreOrder(this.raiz, lista)
        } 
    }
    */

   /* recPreOrder(r, lista){
        if(r.valor === undefined){
            //console.log(r)
            //return r
            lista.agregar(r)
        } else if (r.valor != undefined) {
            //console.log(r.valor)
            //return r.valor
            lista.agregar(r.valor)
        }
        if (r.hIzq != null){
            this.recPreOrder(r.hIzq, lista)
        }
        if (r.hDer!= null){
            this.recPreOrder(r.hDer, lista)
        }
    }*/

    PreOrder(){
        let lista = new Lista
        if (this.raiz === null){
            console.log('No hay una raiz')
        } else{
            this.recPreOrder(this.raiz, lista)
            return lista
        } 
    }

    recPreOrder(r, lista){
        if(r.valor === undefined){
            console.log(r)
            let exp = new Expresion(r)
            lista.agregar(exp)
        } else if (r.valor != undefined) {
            console.log(r.valor)
            let exp = new Expresion(r.valor)
            lista.agregar(exp)
        }
        if (r.hIzq != null){
            this.recPreOrder(r.hIzq, lista)
        }
        if (r.hDer!= null){
            this.recPreOrder(r.hDer, lista)
        }
    }


    PostOrder(){
        let lista = new Lista
        if (this.raiz === null){
            console.log('No hay una raiz')
        } else{
            this.recPostOrder(this.raiz, lista)
            return lista
        } 
    }

    recPostOrder(r, lista){
        if (r.hIzq != null){
            this.recPostOrder(r.hIzq, lista)
        }
        if (r.hDer!= null){
            this.recPostOrder(r.hDer, lista)
        }
        if(r.valor === undefined){
            console.log(r)
            let exp = new Expresion(r)
            lista.agregar(exp)
        } else {
            let exp = new Expresion(r.valor)
            lista.agregar(exp)
            console.log(r.valor)
        }
    }
}