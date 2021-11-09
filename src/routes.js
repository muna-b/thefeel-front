import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import RegisterForm from './pages/RegisterForm/RegisterForm'

function routes() {
    return (
        <Switch>
            <Route path='/login' exact>
                <Login />
            </Route>
            <Route path='/registration' exact>
                <RegisterForm />
            </Route>
            <Route path='/' exact>
                <Home />
            </Route>
        </Switch>
    )
}

export default routes
