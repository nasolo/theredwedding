import React from 'react'
import NavItem from './navItem';

const NavList = ({links, isOpen, as, ...rest}) => {

    const isDefined = links === undefined


    return(
        <>
            { !isDefined && links.map(link => (
                <NavItem {...link} {...rest}>
                    {link.page}
                </NavItem>
            ))}
        </>
           
    )
}

export default NavList