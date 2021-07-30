import Button from "../Button/Button.jsx"
import CartWidget from "../NavBar/CartWidget.jsx"
import "./NavBar.css"

const NavBar = ({name, color}) => {
    return <>
    <Button text = "Inicio" />
    <Button text = "Discos" />
    <Button text = "Tazas" />
    <Button text = "Remeras" />
    <CartWidget />
    </>
}

export default NavBar