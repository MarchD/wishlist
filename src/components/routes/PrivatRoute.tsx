import React, { FC } from 'react'
import { Routes, RouteType } from '../../models/routes'
import { Redirect, Route } from 'react-router-dom'

const PrivatRoute: FC<RouteType> = ({role, ...props}) => {
    return role
        ? <Route {...props} exact/>
        : <Redirect to={Routes.LOGIN_PAGE} />
}

export default PrivatRoute;
