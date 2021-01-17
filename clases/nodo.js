export default class Nodo{
    constructor(valor){
        this.valor = valor
        this.hDer = null
        this.hIzq = null 
    }

    crearNodo(valor){
        let t = valor
        //console.log('esto es t sig:' + t.siguiente)
        valor = new Nodo(valor.valor)
        valor.hDer = t.siguiente.valor
        valor.hIzq = t.anterior.valor
        return valor
    }
}