import React from 'react'
import Box from '../../../elements/Box'
import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom';
import { motion } from 'framer-motion';


const StyledTerms = styled(Box).attrs(props=>({
    className: "terms"
}))`

    overflow: hidden;
    display: flex;
    position: relative;
    flex-direction: column;

`

const Info = ({children, contents, variants, path, ...rest}) => {

   

    const match = useRouteMatch({
        path: path,
        strict: true,
        sensitive: true
      });

      const as = variants ? motion.div : "div"

    return (
        

        <StyledTerms 
            {...rest}
            variants={variants}
            as={as}
            initial="enter"
            animate="center"
            exit="exit"
        >
            {contents}
        </StyledTerms>
    )
}

export default Info