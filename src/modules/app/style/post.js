import styled from "styled-components"
import React from 'react'
import Box from "../../../elements/Box"
import { useParams, useRouteMatch } from "react-router-dom";
import { motion } from "framer-motion";



const StyledTestimonies = styled(Box).attrs(props =>({
    className: "post"
}))`

    position: relative;
    background-color: black;

`



const Post = ({children, path, contents, variants, ...rest}) =>{

    const match = useRouteMatch({
        path: path,
        strict: true,
        sensitive: true
      });

      const as = variants ? motion.div : "div"


    const params = useParams()

    console.log(params)

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




export default Post