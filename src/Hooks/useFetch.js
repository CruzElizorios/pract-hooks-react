import { useEffect } from "react"
import { useState } from "react"

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isloading: true,
        errors:null
    })

    const {data, isloading, errors} = state

    const getFetch = async() =>{

        try{
            const response = await fetch(url)
            const data = await response.json()
            setState({
                data,
                isloading: false,
                errors: null
            })
        }catch(error) {
            setState({
                data: null,
                isloading: false,
                errors: error
            })
        }
    }

    useEffect( ()=>{
        if(!url) return
        getFetch()
    }, [url])
    
    return {
        data,
        isloading,
        errors
    }
}
