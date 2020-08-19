import React from 'react'
import { useRouteMatch } from "react-router-dom";
import Service from './card'
import FullScreenImage from '../../../../elements/imagePlaceholder';
import Col from '../../../../elements/col';
import Container from '../../../../elements/container';
import Row from '../../../../elements/row';

const Services = ({data}) => {
 
    return (
        <FullScreenImage src={data.background} className="d-flex justify-content-center">
            <Container fluid className="h-100 m-auto">
                <Row>
                    {data.services.map((service, i) =>(
                    <Col cols="6" lg={4} key={i} className="p-0">
                        <Service {...service}/>
                    </Col>
                    ))}
                     
                </Row>
            </Container>
        </FullScreenImage>
    )
}

export default Services