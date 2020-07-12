import React from 'react'
import { useRouteMatch } from "react-router-dom";
import FullScreenImage from '../../../../elements/imagePlaceholder';
import Container from '../../../../elements/container';
import Row from '../../../../elements/row';
import Accordian from '../../../../components/accordian';
import Col from '../../../../elements/col';


const Faqs = ({data}) => {

    let match = useRouteMatch('./faqs')
    
    return (
        <FullScreenImage src={data.background} className="d-flex justify-content-center">
            <Container fluid overflow="hidden" maxHeight="80vh">
              
                        <Accordian accordians={data.description}/>
                   
               
            </Container>
        </FullScreenImage>
    )
}

export default Faqs

