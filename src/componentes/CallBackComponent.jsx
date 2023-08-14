import { useState } from "react"
import { Incrementar } from "./Incrementar"
import { useCallback } from "react"

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback(
        (val) => {
            setCounter(contador => contador + val)
        },[]
    )
    return (
        <>
            <h4>2do contador: {counter}</h4>
            <Incrementar incrementar={incrementarPadre} ></Incrementar>
        </>
    )
}
