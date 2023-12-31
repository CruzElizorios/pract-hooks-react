import { useState } from "react"

export const useContador = (valorInicial = 0) => {
  
    const [contador, setContador] = useState(valorInicial)

    const incrementar = (valor= 1) =>{
        setContador(contador + valor)
    }
    const decrementar = (valor= 1) =>{
        setContador(contador - valor)
    }
    const resetear = (valor) =>{
        setContador(0)
    }

    return {
    contador,
    incrementar,
    decrementar,
    resetear
  }
}
