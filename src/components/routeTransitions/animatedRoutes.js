import React from 'react'
import { AnimatePresence } from 'framer-motion'
import {Switch, useLocation } from 'react-router-dom'



 const AnimatedRoutes = ({
    children,
    exitBeforeEnter = true,
    initial = false,
    direction
  }) => {

    const location = useLocation()

    console.log(location)

    return (
      <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial} custom={direction}>
        <Switch location={location} key={location.pathname}>
          {children}
        </Switch>
      </AnimatePresence>
    )
  }

  export default AnimatedRoutes