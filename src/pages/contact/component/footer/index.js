import React from 'react'
import Row from '../../../../elements/row'
import Col from '../../../../elements/col'
import P from '../../../../elements/p'
import Link from '../../../../elements/nav/navLink'
import Spinner from 'react-bootstrap/Spinner'
import Icon from '../../../../components/icon'


const defaultNotice = "Unauthorized Duplication prohibited"

const Footer = ({notice, copyrightLinks, social}) => {

    return (
        <Row
            className="justify-content-between"
        >
           
            <Col cols={5} className="d-flex" >
                <P>{notice}</P>
                
                {copyrightLinks && copyrightLinks.map((links, i) =>(
                    <Link id={`${links.page}-${i}`} href={links.to}>
                        {links.page}
                    </Link>
                ))}
                
            </Col>
            <Col cols={5} className="d-flex justify-content-between">
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