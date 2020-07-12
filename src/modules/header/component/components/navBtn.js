import React from 'react'
import Wrapper from '../../style/wrapper'
import NavList from '../../../../elements/nav'
import Icon from '../../../../components/icon'
import Hamburger from '../../../../elements/hamburger'


const ContactBtns = props => (
    <Wrapper className="row">
        
            <NavList.Link  key="quote-link" href="/home" className="col">
                GET A QUOTE now
            </NavList.Link>
    
            <NavList.Link  key="key-link" href="/home" className="col">
                <Icon icon="person" height={"1.35rem"} pr=".5rem" fill="white"/>
                CHAT live
            </NavList.Link>

    </Wrapper>
)


export default ContactBtns