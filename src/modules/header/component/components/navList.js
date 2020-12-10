import React from 'react'
import NavItem from './navItem';

const NavList = ({links, isOpen, as, ...rest}) => {

    const isDefined = links === undefined
    
    const menuItems = !isDefined && links.filter(link => link.visible)

    return(
        <>
            {  menuItems.map(link => {
                return (
                    <NavItem {...link} {...rest} paddingRight="1rem">
                        {link.page}
                    </NavItem>
                )})}
        </>
           
    )
}

export default NavList