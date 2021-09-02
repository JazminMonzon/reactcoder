import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget.jsx"
import "./NavBar.css"

const NavBar = () => {
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <Link className='navbar-brand' to='/'>The Beatles Store</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className='nav-link' to='/'>Inicio</Link>
                <Link className='nav-link' to='/category/remeras'>Remeras</Link>
                <Link className='nav-link' to='/category/tazas'>Tazas</Link>
                <Link className='nav-link' to='/category/discos'>Discos</Link>
            </div>
        </div>
        <CartWidget />
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar productos..." aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>
    </nav>
    </>
}

export default NavBar