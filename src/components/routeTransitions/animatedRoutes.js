import React from 'react'
import { AnimatePresence } from 'framer-motion'
import {Switch, useLocation, Route, Redirect } from 'react-router-dom'



 const AnimatedRoutes = ({
    children,
    initial = false,
    redirect = {
      path: '/',
      route: '/home'
    }
  }) => {

    const location = useLocation()

    return (
      <AnimatePresence initial={initial} custom={location}>
        <Switch location={location} key={location.pathname}>
          <Route exact path={redirect.path}>
                  <Redirect to={redirect.route} />
          </Route>
          {children}
        </Switch>
      </AnimatePresence>
    )
  }

  export default AnimatedRoutes