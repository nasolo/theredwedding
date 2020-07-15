import React from 'react'
import { AnimatePresence } from 'framer-motion'
import {Switch, useLocation, Route, Redirect } from 'react-router-dom'



 const AnimatedRoutes = ({
    children,
    initial = false
  }) => {

    const location = useLocation()

    return (
      <AnimatePresence initial={initial} custom={location}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
                  <Redirect to="/home" />
          </Route>
          {children}
        </Switch>
      </AnimatePresence>
    )
  }

  export default AnimatedRoutes