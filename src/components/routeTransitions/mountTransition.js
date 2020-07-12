import React from 'react'
import { motion } from 'framer-motion'
import { PropTypes } from 'prop-types';
import styled from 'styled-components'
import Box from '../../elements/Box/index';



 const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0
      };
    },
    center: {
      
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0
      };
    },
    transition: {
        x: { 
            type: "spring", 
            stiffness: 300, 
            damping: 200 
        },
        opacity: { duration: .5 }
      }
  };


const MountTransition = styled(Box).attrs({
    as: motion.div,
    className: "mount-transition"
})``


MountTransition.defaultProps ={
  variants: variants
}

export default MountTransition