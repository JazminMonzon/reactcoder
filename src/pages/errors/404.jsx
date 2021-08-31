import { useRouteMatch } from "react-router"
import "./404.css";


export default function NotFound() {

    const { url } = useRouteMatch()

    return(
        <>  <div className='estilo-error'>
            <br />
            <h1 style={{ color:"red" }}>404</h1>
            <h2>Página no encontrada 🙁</h2>
            <div>{url}</div>
            </div>
        </>
    )
}