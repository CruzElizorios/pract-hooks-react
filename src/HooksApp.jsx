import { CalculosPesados } from "./componentes/CalculosPesados"
import { CallBackComponent } from "./componentes/CallBackComponent"
import { ContadorComponente } from "./componentes/ContadorComponente"
import FormularioComponent from "./componentes/FormularioComponent"
import { UsuariosComponent } from "./componentes/usuariosComponent"

export const HooksApp = () => {
  return (
    <>
        <h1>Practicando Hooks</h1>
        <hr />
        <CallBackComponent/>
        <CalculosPesados/>
        <ContadorComponente></ContadorComponente>
        <FormularioComponent></FormularioComponent>
        {/* <UsuariosComponent/> */}
    </>
  )
}
