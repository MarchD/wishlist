import React from 'react'
import Header from './components/header/Header'
import { Route, Switch } from 'react-router-dom'
import { routes } from './components/routes/routes'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        {routes.map(route => <Route path={route.path} component={route.component} key={route.path} exact/>)}
      </Switch>
    </div>
  );
}

export default App;
