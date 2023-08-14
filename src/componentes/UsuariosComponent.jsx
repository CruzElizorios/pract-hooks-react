import { useFetch } from "../Hooks/useFetch"

export const UsuariosComponent = () => {

    const { data, isloading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <>
            <h2>Lista de Usuarios</h2>

            {isloading
                ? <h5>cargando...</h5>
                : errors ? <p>Hay errores: {errors}</p>
                    : <table className="table table-info table-hover tablita">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Email</th>
                                <th scope="col">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(user => {
                                return(
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.website}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
            }



        </>
    )
}
