import CartWidget from "../CartWidget/CartWidget.jsx"
import "./NavBar.css"

const NavBar = () => {
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand" href="#">The Beatles Store</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">Inicio<span class="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#">Remeras</a>
                <a className="nav-item nav-link" href="#">Tazas</a>
                <a className="nav-item nav-link" href="#">Discos</a>
            </div>
        </div>
        <CartWidget />
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar productos" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>
    </nav>
    </>
}

export default NavBar