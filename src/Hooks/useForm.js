import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)
    
    const cuandoCambiaInput= ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

  return {
      formState,
      cuandoCambiaInput
    }
}
