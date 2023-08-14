import React from 'react'
import { useContador } from '../Hooks/useContador'

export const ContadorComponente = () => {
  
    const{ contador, incrementar, decrementar, resetear}= useContador(0)
    return (
    <>
        <h2>contador: {contador}</h2>
<button  className="btn btn-primary" onClick={ ()=> incrementar(1)}>+1</button>
<button  className="btn btn-danger" onClick={ ()=> resetear()}>Reset</button>
<button  className="btn btn-warning" onClick={ ()=> decrementar()}>-1</button>
    </>
  )
}
