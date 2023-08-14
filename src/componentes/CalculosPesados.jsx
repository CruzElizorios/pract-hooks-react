import { useMemo } from "react"
import { useState } from "react"


export const CalculosPesados = () => {
    
    const [listaNumeros, setListaNumeros] = useState([ 2, 3, 4, 5, 6, 7, 8, 9])
    const [show, setShow] = useState(true)

    const getCalculo = (listaNumeros) => useMemo(() => {
        console.log('calculando')
        return listaNumeros.reduce((a, b) => a * b)
    }, [listaNumeros])

    const agregarNumero = () =>{
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length -1] + 1])
        console.log(listaNumeros)
    }

    return (
        <>
            <h2>Calculos -_-</h2>
            <p> {getCalculo(listaNumeros)} </p>
            <button className="btn btn-info" onClick={() => setShow(!show)}> {show ? 'Show' : 'Hide'} </button>
            <button className="btn btn-success" onClick={()=>agregarNumero()} >agregar un numero</button>
        </>
    )
}
