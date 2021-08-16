import './App.css';

import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <h1>The Beatles Store</h1>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}

export default App;