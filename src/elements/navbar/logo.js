import React from 'react'
import Box from "../Box";
import styled from "styled-components";
import css from '@styled-system/css'

const mediaQueries = ({theme}) => css({
    
    [theme.mediaQueries.xs]: {
        maxHeight: "16vh"
    },
    [theme.mediaQueries.sm]: {
        maxHeight: "25vh"
    }
})

const Logo = styled(Box).attrs(props =>({
    as: 'img',
    className: 'navbar-logo'
}))`

${mediaQueries};

`



const NavBarLogo = React.forwardRef(
    ({...rest})=>(
        <Logo {...rest}/>
    )
)


export default NavBarLogo

