import React from 'react'
import Wrapper from '../../style/wrapper'
import NavList from '../../../../elements/nav'
import Icon from '../../../../components/icon'
import { useLocation } from "react-router-dom";


const pagesToExclude = ["/contact", "/terms"]

const ContactBtns = props => {

    const location = useLocation()

    const {pathname} = location

    const hideButtons = pagesToExclude.includes(pathname)

    return(
        <Wrapper className="row" hide={hideButtons}>
                <NavList.Link  key="quote-link" href="/home" className="col" variant="md">
                    GET A QUOTE now
                </NavList.Link>
        
                <NavList.Link  key="key-link" href="/home" className="col" variant="md">
                    <Icon icon="person" height={"1.35rem"} pr=".5rem" fill="white"/>
                    CHAT live
                </NavList.Link>
        </Wrapper>
)}


export default ContactBtns