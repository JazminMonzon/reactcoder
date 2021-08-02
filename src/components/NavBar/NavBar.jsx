import Button from "../Button/Button.jsx"
import CartWidget from "../CartWidget/CartWidget.jsx"
import "./NavBar.css"

const NavBar = () => {
    return <>
    <Button text = "Inicio" />
    <Button text = "Discos" />
    <Button text = "Tazas" />
    <Button text = "Remeras" />
    <CartWidget />
    </>
}

export default NavBar