import React from 'react'
import NavItem from './navItem';

const NavList = ({links, isOpen, as, ...rest}) => {

    const isDefined = links === undefined


    return(
        <>
            { !isDefined && links.map(link => (
                <NavItem {...link} {...rest} paddingRight="1rem">
                    {link.page}
                </NavItem>
            ))}
        </>
           
    )
}

export default NavList