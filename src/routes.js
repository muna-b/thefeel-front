import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'

function routes() {
    return (
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
        </Switch>
    )
}

export default routes
