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

btnAgregar.addEventListener('click', () =>{


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

})

btnGenerar.addEventListener('click', () => {
    arbol.generar(lista)
})

btnPreOrder.addEventListener('click', () =>{

if (arbol.raiz != null){
 var listaPreOrder = arbol.PreOrder()
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
     } else {
         listaLifo.agregar(ultimo)
         listaPreOrder.eliminar(listaPreOrder.irUltimo())
         i++
     }
 }

 console.log('--------RESULTADO LIFO (PREORDER)---------')
 console.log(listaLifo.inicio.valor)
 etResultadoPreOrder.innerHTML = 'Resultado PreOrder (LIFO): ' + listaLifo.inicio.valor

} else {
    alert('Por favor, genera el árbol')
}
   

})

btnPostOrder.addEventListener('click', () =>{


if(arbol.raiz != null){
    
  var listaPostOrder2 = arbol.PostOrder()
  var listaFifo2 = new Lista
  var i3 = 0
  
  while(listaPostOrder2.inicio != null){
      let inicio = listaPostOrder2.inicio
      let inicio2 = new Expresion
      if(isNaN(inicio.valor)){
          i3++
          let elem2 = listaFifo2.irUltimo()
          let elem1 = elem2.anterior
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
  
      } else if(!isNaN(inicio.valor)) {
          inicio2.valor = inicio.valor
          listaFifo2.agregar(inicio2)
          listaPostOrder2.eliminar(inicio)
          i3++
      } 
  }
  console.log('--------RESULTADO FIFO (POSTORDER)---------')
  console.log(listaFifo2.inicio.valor)
  etResultadoPostOrder.innerHTML = 'Resultado PostOrder (FIFO): ' + listaFifo2.inicio.valor

} else {
    alert('Por favor, genera el árbol')
}
  
})
