import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from "./pages/errors/404.jsx";
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemList';
// import EventsExample from './components/EventsExample/EventsExample';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={ItemListContainer} />
        <Route exact path='/:category/' component={ItemList} />
        <Route exact path='/:category/:id' component={ItemDetailContainer} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;