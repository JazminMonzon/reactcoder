import './App.css';

import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"

function App() {
  return (
    <>
    <h1>The Beatles Store</h1>
    <NavBar />
    <ItemListContainer name="Carlos" carrito="Remera Revolver" />
    </>
  );
}

export default App;