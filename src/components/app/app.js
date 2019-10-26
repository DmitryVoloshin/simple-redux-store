import React from 'react';
import { Route ,Switch} from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import HeaderOfShop from '../head-of-shop';


import './app.css';


const App = () =>{
    return (
        <div >
        <HeaderOfShop numItems={4} total={99}/>
        <Switch>
            <Route path="/"
            component={HomePage}
            exact/>
            <Route path="/Cart"
            component={CartPage}
            />
        </Switch>
        </div>
    )
};

export default App