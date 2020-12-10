import React from 'react'
import FooterHeading from '../../style/footerHeading'
import Col from '../../../../elements/col'
import Icon from '../../../../components/icon'

const Heading = ({isDesktop, variants, onClick}) => (

    <FooterHeading 
        className="justify-content-end text-center"
        variants={isDesktop && {...variants}}
        whileHover={{cursor: "pointer"}}
    >
         <Col cols={9} pt="1rem">Gallery Filter</Col>
        <Col cols={2} pt=".75rem">
            <Icon icon="wrong" height="2rem" width="1rem" onClick={() => onClick()}/>
        </Col>
       
    </FooterHeading>

)


export default Heading