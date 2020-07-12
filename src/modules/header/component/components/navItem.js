import React from 'react'
import NavList from '../../../../elements/nav';

const NavItem = ({
    position, 
    as, 
    isOpen, 
    variants, 
    className,
    children,
    to, 
    ...rest}) => (
        <NavList.Item
            {...rest}
            key={`${position}-nav-item`} 
            isOpen={isOpen} as={as} 
            variants={variants}
            className={className}
        > 
            <NavList.Link  key={`${position}-nav-link`} href={to} {...rest}>        
                {children}
            </NavList.Link>
        </NavList.Item>
)


export default NavItem