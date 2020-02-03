import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Movie from './Movie';

const Router = () => (
    <HashRouter>
        <Switch>
            <Route path='/' component={App} exact />
            <Route path='/movie/:id' component={Movie} />            
        </Switch>
    </HashRouter>
);

export default Router;