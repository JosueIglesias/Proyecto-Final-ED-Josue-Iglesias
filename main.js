import Lista from "./clases/lista.js"
import Expresion from "./clases/expresion.js"
import Arbol from "./clases/arbol.js"

var btnAgregar = document.querySelector('#btnAgregar')
var btnPreOrder = document.querySelector('#btnPreOrder')
var btnPostOrder = document.querySelector('#btnPostOrder')
var btnGenerar = document.querySelector('#btnGenerar')
var termino = document.querySelector('#inputAgregar')
var etResultadoPreOrder = document.querySelector('#etResultadoPreOrder')
var etResultadoPostOrder = document.querySelector('#etResultadoPostOrder')


var lista = new Lista
var arbol = new Arbol
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
btnAgregar.addEventListener('click', () =>{
 //   console.log('--------Lista---------')


let terminoNuevo = Number(termino.value)

if (!isNaN(terminoNuevo)){
    let exp = new Expresion(terminoNuevo)
    lista.agregar(exp)
    console.log(lista)
} else {
    let exp = new Expresion(termino.value)
    lista.agregar(exp)
    console.log(lista)
}


 /*
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
*/



//AJUSTAR ESTO
/*  
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
*/
//arbol.generar(lista)

    /*console.log('--------Inorder---------')
    arbol.inOrder()

    console.log('--------Preorder---------')
    arbol.PreOrder()
    
    console.log('--------Postorder---------')
    arbol.PostOrder()
*/
})

btnGenerar.addEventListener('click', () => {
    arbol.generar(lista)
})

btnPreOrder.addEventListener('click', () =>{

if (arbol.raiz != null){
 //console.log('--------Lista Preorder---------')
 var listaPreOrder = arbol.PreOrder()
 //console.log(listaPreOrder)


 //arbol.PreOrder(listaPreOrder)
 //console.log(listaPreOrder)
 //console.log('--------Lista Lifo---------')
 
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
 //console.log(listaLifo)

 console.log('--------RESULTADO LIFO (PREORDER)---------')
 console.log(listaLifo.inicio.valor)
 etResultadoPreOrder.innerHTML = 'Resultado PreOrder (LIFO): ' + listaLifo.inicio.valor

} else {
    alert('Por favor, genera el árbol')
}
   

})

btnPostOrder.addEventListener('click', () =>{


if(arbol.raiz != null){
  //console.log('--------Lista FIFO---------')
    
  var listaPostOrder2 = arbol.PostOrder()
  var listaFifo2 = new Lista
  var i3 = 0
  
  while(listaPostOrder2.inicio != null){
      let inicio = listaPostOrder2.inicio
      let inicio2 = new Expresion
      //console.log('valor de inicio: ' + inicio.valor)
      if(isNaN(inicio.valor)){
          //console.log('No es un numero ' + inicio.valor)
          //listaPostOrder2.eliminar(inicio)
          i3++
          let elem2 = listaFifo2.irUltimo()
          let elem1 = elem2.anterior
          //console.log('ronda ' + i3 + ' operador ' + inicio.valor)
          //console.log('elemento1: ' + elem1.valor)
          //console.log('elemento2: ' + elem2.valor)
          //console.log(i3)
          let result = new Expresion
          switch (inicio.valor){
              case '^':
              result.valor = Math.pow(elem1.valor, elem2.valor)
              listaPostOrder2.eliminar(listaPostOrder2.inicio)
              listaFifo2.agregar(result)
              listaFifo2.eliminar(elem2)
              listaFifo2.eliminar(elem1)
              break
              case '*':
              result.valor = elem1.valor*elem2.valor
              listaPostOrder2.eliminar(listaPostOrder2.inicio)
              listaFifo2.agregar(result)
              listaFifo2.eliminar(elem2)
              listaFifo2.eliminar(elem1)
              //console.log(listaFifo2)
  
              break
              case '/':
              result.valor = elem1.valor/elem2.valor
              listaPostOrder2.eliminar(listaPostOrder2.inicio)
              listaFifo2.agregar(result)
              listaFifo2.eliminar(elem2)
              listaFifo2.eliminar(elem1)
              break
              case '+':
              result.valor = elem1.valor+elem2.valor
              listaPostOrder2.eliminar(listaPostOrder2.inicio)
              listaFifo2.agregar(result)
              listaFifo2.eliminar(elem2)
              listaFifo2.eliminar(elem1)
              break
              case '-':
              result.valor = elem1.valor-elem2.valor
              listaPostOrder2.eliminar(listaPostOrder2.inicio)
              listaFifo2.agregar(result)
              listaFifo2.eliminar(elem2)
              listaFifo2.eliminar(elem1)
              break
              default:
                  console.log('La expresión ' + inicio + ' no es válida')
          }
          //console.log('resultado ' + result.valor)
  
      } else if(!isNaN(inicio.valor)) {
          inicio2.valor = inicio.valor
          //console.log('es un numero ' + inicio.valor)
          listaFifo2.agregar(inicio2)
          listaPostOrder2.eliminar(inicio)
          i3++
      } 
  }
  //console.log(listaPostOrder2)
  console.log('--------RESULTADO FIFO (POSTORDER)---------')
  console.log(listaFifo2.inicio.valor)
  etResultadoPostOrder.innerHTML = 'Resultado PostOrder (FIFO): ' + listaFifo2.inicio.valor

} else {
    alert('Por favor, genera el árbol')
}
  
})
