import React from 'react'
import Row from '../../../../elements/row'
import Col from '../../../../elements/col'
import P from '../../../../elements/p'
import Link from '../../../../elements/nav/navLink'
import Icon from '../../../../components/icon'
import CopyrightWrapper from './style/links'



const defaultNotice = "Unauthorized Duplication prohibited"

const Footer = ({notice, copyrightLinks, social}) => {

    return (
        <Row
            className="justify-content-between"
        >
           
            <CopyrightWrapper>
                <P>{notice}</P>
                
                {copyrightLinks && copyrightLinks.map((links, i) =>(
                    <Link id={`${links.page}-${i}`} href={links.to}>
                        {links.page}
                    </Link>
                ))}
                
            </CopyrightWrapper>
            <Col cols={6} className="d-flex justify-content-between">
                {social && social.map((social, i) => (
                    <Link id={`link-${social.icon}-${i}`} href={social.to}>
                        <Icon height="2rem" fill="white" key={`icon-${social.icon}-${i}`}icon={social.icon}/>  
                    </Link>
                ))}
            </Col>
        </Row>
    )
}

export default Footer