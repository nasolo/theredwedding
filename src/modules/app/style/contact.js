import React from 'react'
import styled from 'styled-components';
import Box from '../../../elements/Box';
import { useRouteMatch } from 'react-router-dom';
import { motion } from 'framer-motion';


const StyledContact = styled(Box).attrs(props =>({
    className: 'contact'
}))`

position: relative;
    background-color: black;
    height: 100vh;
    overflow: hidden;

`


const Contact = ({children, path, contents, variants, ...rest}) => {

    const match = useRouteMatch({
        path: path,
        strict: true,
        sensitive: true
      });

      const as = variants ? motion.div : "div"

    return (
        <StyledContact
            {...rest}
            variants={variants}
            as={as}
            initial="enter"
            animate="center"
            exit="exit"
        >
            {contents}
        </StyledContact>
    )
}


export default Contact