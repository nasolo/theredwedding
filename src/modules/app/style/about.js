import React from 'react'

import styled from "styled-components"
import Box from "../../../elements/Box"
import { useRouteMatch } from 'react-router-dom'
import { motion } from 'framer-motion'



const StyledAbout = styled(Box).attrs(props =>({
    className: "about"
}))`

    position: relative;
    background-color: black;
    height: 100vh;
    overflow: hidden;
   

`



const About = ({children, path, contents, variants, ...rest}) =>{

    const match = useRouteMatch({
        path: path,
        strict: true,
        sensitive: true
      });

      const as = variants ? motion.div : "div"

    return(
        <StyledAbout 
            {...rest}
            variants={variants}
            as={as}
            initial="enter"
            animate="center"
            exit="exit"
        >
            {contents}
        </StyledAbout>
    )

}

export default About