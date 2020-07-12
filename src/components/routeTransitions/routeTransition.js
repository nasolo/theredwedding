import React from 'react'
import  MountTransition  from './mountTransition'
import { Route } from 'react-router-dom';


const RouteTransition = ({
    exact = false,
    path,
    children,
    direction,
    ...rest
}) => (
    <Route
    {...rest}    
    exact={exact}
    path={path}
    direction
    >
        <MountTransition direction={direction}>
            {children}
        </MountTransition>
    </Route>
)


export default RouteTransition