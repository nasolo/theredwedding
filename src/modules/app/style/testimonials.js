import styled from "styled-components"
import React from 'react'
import Box from "../../../elements/Box"
import { useRouteMatch } from "react-router-dom";
import { motion } from "framer-motion";



const StyledTestimonies = styled(Box).attrs(props =>({
    className: "tesimonials"
}))`

    position: relative;
    background-color: black;

`



const Testimonies = ({children, path, contents, variants, ...rest}) =>{

    const match = useRouteMatch({
        path: path,
        strict: true,
        sensitive: true
      });

      const as = variants ? motion.div : "div"

    return(
        <StyledTestimonies 
            {...rest} 
            variants={variants}
            as={as}
            initial="enter"
            animate="center"
            exit="exit"
        >
            {contents}
        </StyledTestimonies>
    )

}




export default Testimonies