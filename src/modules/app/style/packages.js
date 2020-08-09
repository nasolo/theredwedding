import React from 'react'
import Box from '../../../elements/Box'
import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom'
import { motion } from 'framer-motion'



const StyledPackages = styled(Box).attrs(props=>({
    className: "packages"
}))`

    background-color: ${({theme}) => theme.colors.blacks[0]};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem auto;
    height: 100vh;
    overflow: hidden;
    z-index: 1;
    
`


const Packages = ({children, path, contents, variants, ...rest}) =>{

    const match = useRouteMatch({
        path: path,
        strict: true,
        sensitive: true
      });

      const as = variants ? motion.div : "div"

    return(
        <StyledPackages 
            {...rest}
            variants={variants}
            as={as}
            initial="enter"
            animate="center"
            exit="exit"
        >
            {contents}
        </StyledPackages>
    )

}



export default Packages