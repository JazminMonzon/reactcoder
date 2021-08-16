import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import NotFound from "./errors/404";

export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ItemListContainer} />
                <Route exact path='/category/:id' component={ItemListContainer} />
                <Route exact path='/item/:id' component={ItemDetailContainer} />
                <Route path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}