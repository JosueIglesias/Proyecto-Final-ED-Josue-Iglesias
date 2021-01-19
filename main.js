import Lista from "./clases/lista.js"
import Expresion from "./clases/expresion.js"
import Arbol from "./clases/arbol.js"

var btnAgregar = document.querySelector('#btnAgregar')
var lista = new Lista
var arbol = new Arbol
//var listaPreOrder = arbol.PreOrder()

/*
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
*/
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
let exp12 = new Expresion('/')
let exp13 = new Expresion(2)
let exp14 = new Expresion('*')
let exp15 = new Expresion(9)

btnAgregar.addEventListener('click', () =>{
    console.log('--------Lista---------')

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
    lista.agregar(exp12)
    lista.agregar(exp13)
    lista.agregar(exp14)
    lista.agregar(exp15)

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
    //console.log(listaPreOrder)


    //arbol.PreOrder(listaPreOrder)
    //console.log(listaPreOrder)
    console.log('--------Lista Lifo---------')
    
    var listaLifo = new Lista
    let i = 0
    while (listaPreOrder.inicio != null){
        let ultimo = listaPreOrder.irUltimo()
        if (isNaN(ultimo.valor)){
            let elem1 = listaLifo.irUltimo()
            let elem2 = elem1.anterior
            let result = new Expresion
            switch (ultimo.valor){
                case '^':
                result.valor = Math.pow(elem1.valor, elem2.valor)
                listaPreOrder.eliminar(ultimo)
                listaLifo.agregar(result)
                listaLifo.eliminar(elem1)
                listaLifo.eliminar(elem2)
                break
                case '*':
                result.valor = elem1.valor*elem2.valor
                listaPreOrder.eliminar(ultimo)
                listaLifo.agregar(result)
                listaLifo.eliminar(elem1)
                listaLifo.eliminar(elem2)
                break
                case '/':
                result.valor = elem1.valor/elem2.valor
                listaPreOrder.eliminar(ultimo)
                listaLifo.agregar(result)
                listaLifo.eliminar(elem1)
                listaLifo.eliminar(elem2)
                break
                case '+':
                result.valor = elem1.valor+elem2.valor
                listaPreOrder.eliminar(ultimo)
                listaLifo.agregar(result)
                listaLifo.eliminar(elem1)
                listaLifo.eliminar(elem2)
                break
                case '-':
                result.valor = elem1.valor-elem2.valor
                listaPreOrder.eliminar(ultimo)
                listaLifo.agregar(result)
                listaLifo.eliminar(elem1)
                listaLifo.eliminar(elem2)
                break
                default:
                    console.log('La expresión ' + ultimo + ' no es válida')
            }
        i++
        //console.log(i)
        } else {
            listaLifo.agregar(ultimo)
            listaPreOrder.eliminar(listaPreOrder.irUltimo())
            i++
            //console.log(i)
        }
    }
    console.log(listaLifo)

    console.log('--------RESULTADO---------')
    console.log(listaLifo.inicio.valor)

//PROBANDO ELIMINAR ULTIMOS
   //listaPreOrder.eliminar(listaPreOrder.irUltimo())
   //listaPreOrder.eliminar(listaPreOrder.irUltimo())

   //console.log(listaPreOrder.irUltimo())



})
