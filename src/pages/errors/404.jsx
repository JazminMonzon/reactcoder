import { useRouteMatch } from "react-router"


export default function NotFound() {

    const { url } = useRouteMatch()

    return(
        <>
            <h1 style={{ color:"red" }}>No logre encontrar la pagina</h1>
            <div>{url}</div>
        </>
    )
}