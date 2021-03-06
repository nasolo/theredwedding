import React from 'react'
import styled from "styled-components"
import Item from './navItem'
import Link from './navLink'
import Nav from 'react-bootstrap/Nav'
import ComposeBoxHelper from '../../utils/style/composeBox'

const StyledNav = ({className, children, ...rest}) =>(
    <Nav className={className} {...rest}>
        {children}
    </Nav>
)


const NavList = styled(StyledNav)`
    ${ComposeBoxHelper}
`

NavList.Item = Item
NavList.Link = Link


export default NavList