import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ContactForm from './components/Contact/Contact form/ContactForm'
import LegalNotices from './components/LegalNotices/LegalNotices'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound.jsx/NotFound'
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
            <Route path='/mentionslegales' exact>
                <LegalNotices />
            </Route>
            <Route path='/contact' exact>
                <ContactForm />
            </Route>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route component={NotFound} />
        </Switch>
    )
}

export default routes
