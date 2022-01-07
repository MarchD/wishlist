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
                <Redirect
                    from={Routes.MAIN_PAGE}
                    to={Routes.PROFILE_PAGE}
                    exact
                />
                {routes.map(route =>
                    <Route
                        path={route.path}
                        component={route.component}
                        key={route.path}
                        exact
                    />)}
                <Redirect to={Routes.PAGE_NOT_FOUND}/>
            </Switch>
        </div>
    )
}

export default App
