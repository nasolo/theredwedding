import React from 'react'
import Box from '../../../elements/Box'
import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom'
import { motion } from 'framer-motion'



const StyledHome = styled(Box).attrs(props=>({
    className: "home"
}))`

    

`


const Home = ({children, contents, path, variants, ...rest}) => {

    const match = useRouteMatch({
        path: path,
        strict: true,
        sensitive: true
      });

      const as = variants ? motion.div : "div"

    return (
        <StyledHome 
            {...rest}
            variants={variants}
            as={as}
            initial="enter"
            animate="center"
            exit="exit"
        >
            {contents}
        </StyledHome>
    )
}

export default Home