import React from 'react'
import { useRouteMatch } from "react-router-dom";
import FullScreenImage from '../../../../elements/imagePlaceholder';
import Container from '../../../../elements/container';
import Accordian from '../../../../components/accordian';



const Faqs = ({data}) => {

    let match = useRouteMatch('./faqs')
    
    return (
        <FullScreenImage src={data.background} className="d-flex justify-content-center">
            <Container fluid overflow="hidden" margin="20vh auto 1rem" maxHeight="50%">
              
                        <Accordian accordians={data.description}/>
                   
               
            </Container>
        </FullScreenImage>
    )
}

export default Faqs

