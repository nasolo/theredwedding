import React from 'react'
import Box from "../Box";
import styled from "styled-components";
import classNames from '../../utils/classNames';
import { variant } from 'styled-system';
import { motion } from 'framer-motion';

const bsPrefix = "navbar-nav"

    const variants = variant({
        variants:{
            
            ["justify-left"]: {
                marginRight: "auto"
            },
            ["justify-right"]: {
                marginLeft: "auto"
            },
            
        }
    })

const Nav = styled(Box).attrs(props =>({
    as: props.variants ? motion.ul : "ul",
    className: `${props.fill ? "nav-fill w-100" : ""}`
}))`
    margin: auto;
    ${variants};

`



const NavbarNav = React.forwardRef(
    ({className, ...rest})=>(
        <Nav className={classNames(className, bsPrefix)} {...rest}/>
    )
)


export default NavbarNav

