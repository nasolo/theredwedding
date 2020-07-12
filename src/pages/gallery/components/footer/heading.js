import React from 'react'
import FooterHeading from '../../style/footerHeading'
import Col from 'react-bootstrap/Col'
import Icon from '../../../../components/icon'

const Heading = ({isDesktop, variants, onClick}) => (

    <FooterHeading 
        className="justify-content-end text-center"
        variants={isDesktop && {...variants}}
        whileHover={{cursor: "pointer"}}
    >
        <Col xs={1} className="mt-auto mb-0 pt-3 mr-3">
            <Icon icon="wrong" height="2rem" width="1rem" onClick={() => onClick()}/></Col>
        <Col xs={12}>Gallery Filter</Col>
    </FooterHeading>

)


export default Heading