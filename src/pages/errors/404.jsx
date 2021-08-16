import { useRouteMatch } from "react-router"


export default function NotFound() {

    const { url } = useRouteMatch()

    return(
        <>
            <h1 style={{ color:"red" }}>404</h1>
            <h2>Página no encontrada</h2>
            <div>{url}</div>
        </>
    )
}