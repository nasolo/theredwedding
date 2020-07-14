import React from 'react'
import { AnimatePresence } from 'framer-motion'
import {Switch, useLocation } from 'react-router-dom'



 const AnimatedRoutes = ({
    children,
    initial = false
  }) => {

    const location = useLocation()

    return (
      <AnimatePresence initial={initial} custom={location}>
        <Switch location={location} key={location.pathname}>
          {children}
        </Switch>
      </AnimatePresence>
    )
  }

  export default AnimatedRoutes