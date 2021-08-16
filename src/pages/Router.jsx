import { BrowserRouter, Route, Switch } from "react-router-dom";
import Item from "../components/Item/Item";
import NotFound from "./errors/404";

export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'></Route>
                <Route exact path='/item/:id' component={Item} />
                <Route exact path='/item/:id/detail'>
                    <div>Mi detalle del producto</div>
                </Route>
                <Route path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}