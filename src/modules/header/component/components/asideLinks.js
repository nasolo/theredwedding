import React from 'react'


import Icon from '../../../../components/icon'
import NavItem from './navItem';



const AsideLinks = ({pageLinks, social, ...rest}) => {

    
    const links = [...pageLinks, ...social]

    return(
        <>
        {links.map((link, i) =>(
            <NavItem {...link} {...rest}>        
                {link.page}
                {link.icon && <Icon height="2rem" icon={link.icon} fill="black" key={link.id}/>}
            </NavItem>
        ))}
    
        </>
    )
}

export default AsideLinks