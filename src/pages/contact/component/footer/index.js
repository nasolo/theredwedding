import React from 'react'
import Row from '../../../../elements/row'
import Col from '../../../../elements/col'
import P from '../../../../elements/p'
import Link from '../../../../elements/nav/navLink'
import Icon from '../../../../components/icon'
import CopyrightWrapper from './style/links'
import Notice from './style/notice'
import Container from '../../../../elements/container'



const defaultNotice = "Unauthorized Duplication prohibited"

const Footer = ({notice, copyrightLinks, social}) => {

    return (
        <Container className="h-100">
        <Row
            className="justify-content-between"
        >
           
            <CopyrightWrapper>
                <Notice notice={notice}/>
                
                {copyrightLinks && copyrightLinks.map((links, i) =>(
                    <Link id={`${links.page}-${i}`} href={links.to}>
                        {links.page}
                    </Link>
                ))}
                
            </CopyrightWrapper>
            <Col cols={5} className="d-flex justify-content-between m-auto">
                {social && social.map((social, i) => (
                    <Link id={`link-${social.icon}-${i}`} href={social.to}>
                        <Icon 
                            height="2rem" 
                            fill="rgba(253,253,253,.4)" 
                            key={`icon-${social.icon}-${i}`}
                            icon={social.icon}
                        />  
                    </Link>
                ))}
            </Col>
        </Row>
        </Container>
    )
}

export default Footer