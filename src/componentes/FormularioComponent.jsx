import { useForm } from "../Hooks/useForm"

const FormularioComponent = () => {
    
    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }

    const {formState,  cuandoCambiaInput} = useForm(initialForm)

     const{userName, email, password} = formState

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">Nombre Usuario</label>
                <input type="text" className="form-control" name="userName" placeholder="pone el usuario" value={userName} onChange={cuandoCambiaInput} ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input  type="email" className="form-control" name="email" placeholder="tucorreo@gmail.com" value={email} onChange={cuandoCambiaInput} ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" name="password"
                placeholder="tu contra papá" value={password} onChange={cuandoCambiaInput}></input>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}

export default FormularioComponent