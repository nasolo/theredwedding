import React from 'react'
import Navbar from '../../../../elements/navbar'
import Container from '../../../../elements/container'

import Brand from '../components/brand'
import NavList from '../components/navList'
import ContactBtns from '../components/navBtn'
import Hamburger from '../../../../elements/hamburger'
import NavText from '../components/text';



const TopNavigation = ({links, brand, isOpen, toggle}) => {


    

    return (
        <Navbar expand="lg" variant="top">
            <Container>
                
            <Brand {...brand}/>
            <Navbar.Collapse flexWrap="nowrap">
                <Navbar.NavbarNav variant="justify-left">
                    <NavList links={links} fill/>
                    <NavText text="(312-857-3187)" className="nav-link nav-item" color="white" fontWeight="700"/>
                </Navbar.NavbarNav>
            </Navbar.Collapse>
             
            <ContactBtns />
                <Hamburger className="d-block d-lg-none"  isOpen={isOpen} toggle={toggle}/>
            </Container>
        </Navbar>
    )
}


export default TopNavigation