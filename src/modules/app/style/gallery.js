import React from 'react'
import Box from '../../../elements/Box'
import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom';
import { motion } from 'framer-motion';


const StyledGallery = styled(Box).attrs(props=>({
    className: "gallery"
}))`

    overflow: hidden;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    position: relative;
    flex-direction: column;

`

const Gallery = ({children, contents, variants, path, ...rest}) => {

    console.log(path)

    const match = useRouteMatch({
        path: path,
        strict: true,
        sensitive: true
      });

      const as = variants ? motion.div : "div"

    return (
        

        <StyledGallery 
            {...rest}
            variants={variants}
            as={as}
            initial="enter"
            animate="center"
            exit="exit"
        >
            {contents}
        </StyledGallery>
    )
}

export default Gallery