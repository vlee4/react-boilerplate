import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './Components/Home';

const Routes = () => {
    return (
        <>
        <Switch>
            <Route exact path='/' component={Home}></Route>
        </Switch>
        </>
    )
}

export default Routes;