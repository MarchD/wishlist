import React from 'react'
import Header from './components/header/Header'
import { Redirect, Route, Switch } from 'react-router-dom'
import { routes } from './components/routes/routes'
import { Routes } from './models/routes'

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                {routes.map(route => <Route path={route.path} component={route.component} key={route.path} exact/>)}
                <Redirect to={Routes.PAGE_NOT_FOUND}/>
            </Switch>
        </div>
    )
}

export default App
