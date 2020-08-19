import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const RouteWithProps = (route) => {

    return (
        <Route
            path={`${route.path}`}
            render={props =>(
                <route.component {...props} data={route.data}/>
            )}
        />
    )
}

export default RouteWithProps