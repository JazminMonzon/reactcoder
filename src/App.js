import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from "./pages/errors/404.jsx";
import NavBar from './components/NavBar/NavBar';
import Cart from "./components/Cart/Cart";
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';

function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ItemListContainer} />
          <Route exact path='/category/:category/' component={ItemListContainer} />
          <Route exact path='/productos/:id' component={ItemDetailContainer} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/orders' component={Orders} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;