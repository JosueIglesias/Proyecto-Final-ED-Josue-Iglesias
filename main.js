import Lista from "./clases/lista.js"
import Expresion from "./clases/expresion.js"
import Arbol from "./clases/arbol.js"

var btnAgregar = document.querySelector('#btnAgregar')
var lista = new Lista
var arbol = new Arbol
//var listaPreOrder = arbol.PreOrder()


let exp1 = new Expresion(5)
let exp2 = new Expresion('+')
let exp3 = new Expresion(2)
let exp4 = new Expresion('*')
let exp5 = new Expresion(3)
let exp6 = new Expresion('-')
let exp7 = new Expresion(1)
let exp8 = new Expresion('*')
let exp9 = new Expresion(2)
let exp10 = new Expresion('^')
let exp11 = new Expresion(2)

btnAgregar.addEventListener('click', () =>{
    lista.agregar(exp1)
    lista.agregar(exp2)
    lista.agregar(exp3)
    lista.agregar(exp4)
    lista.agregar(exp5)
    lista.agregar(exp6)
    lista.agregar(exp7)
    lista.agregar(exp8)
    lista.agregar(exp9)
    lista.agregar(exp10)
    lista.agregar(exp11)

    console.log('--------Lista---------')
    console.log(lista)

    console.log('--------Nodo---------')
    //lista.recorrer('*')

    console.log('--------Lista---------')
    console.log(lista)

    console.log('--------Generar arbol---------')
    console.log(arbol.generar(lista))

    console.log('--------Raiz arbol---------')
    console.log(arbol.raiz)

    console.log('--------Inorder---------')
    arbol.inOrder()

    console.log('--------Preorder---------')
    arbol.PreOrder()
    
    console.log('--------Postorder---------')
    arbol.PostOrder()

    console.log('--------Lista Preorder---------')
    var listaPreOrder = arbol.PreOrder()
    console.log(listaPreOrder)
    //arbol.PreOrder(listaPreOrder)
    //console.log(listaPreOrder)

})
