import React, { useEffect } from 'react'
import {motion, AnimatePresence } from "framer-motion"

import SideMenu from '../../style/sidemenu'
import Hamburger from '../../../../elements/hamburger'
import InnerWrapper from '../../style/innerWrapper'
import AsideLinks from '../components/asideLinks'
import Copyright from '../components/copyright'
import { sideDraweVarients, parent, siblings } from '../animations/sideDrawer'
import Navbar from '../../../../elements/navbar/index';
import { useLocation } from 'react-router-dom'


 

const SideDrawer = ({links, social, copyright, isOpen, toggle}) => {

const location = useLocation()

useEffect(() => {
    isOpen && toggle()
}, [location])

return (
<AnimatePresence custom={isOpen}>
    {isOpen &&
    <SideMenu
        as={motion.div}
        custom={isOpen}
        animate={isOpen ? "open" : "closed"}
        initial="initial"
        enter="open"
        exit="closed"

        variants={sideDraweVarients}
    >
        <InnerWrapper >
            <Hamburger  position="absolute" top={0} right={0} isOpen={isOpen} toggle={toggle}/>

            <Navbar.NavbarNav
                as={motion.ul}
                initial="initial"
                enter="open"
                exit="closed"
                animate={isOpen ? "open" : "closed"}
                variants={parent}
                alignItems="flex-end"
                textAlign="right"
            >
            <AsideLinks 
                pageLinks={links} 
                social={social} 
                isOpen={isOpen} 
                variants={siblings}
                as={motion.li}
                color="black"
                textAlign="right"
            />
            <Copyright 
                text={copyright} 
                isOpen={isOpen}
            />
        </Navbar.NavbarNav>
        </InnerWrapper>
    </SideMenu>
}
</AnimatePresence>
)
}

export default SideDrawer