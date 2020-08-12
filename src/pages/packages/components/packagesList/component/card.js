import React from 'react'
import Card from '../../../../../elements/card'
import { motion } from 'framer-motion';
import { useBreakpoint } from 'react-laag'
import { useDispatch } from 'react-redux';
import Col from '../../../../../elements/col';
import { togglePackageDetailsPage } from '../../../redux/actions';
import CardOverlay from '../../../style/imgOverlay';
import { Link } from 'react-router-dom';

const PackageCard = ({id, previewImage, name, subtitle}) =>{

    const isMobile = useBreakpoint(960)
    const dispatch = useDispatch()
    
    return(
        <Col className="p-0 pr-1">
               
                <Card 
                    className="bg-transparent text-white text-center mb-2"
                    minHeight="5rem"
                    as={motion.div}
                    layoutId={`card-${id}`}
                    key={`card-${id}`}
                    layoutId={`${id}`}
                    whileHover={{cursor: isMobile ? "pointer" : "unset"}}
                    onClick={()=> isMobile && dispatch(togglePackageDetailsPage(id))}
                  
                >
                    
                        <CardOverlay
                            id={id} 
                            key={`image-${id}`}
                            layoutId={`image-${id}`}
                            src={previewImage}
                            className="rounded-0 card-img"
                            
                        />
                 
                        <Card.Body
                            className="p-3 d-none d-lg-block"
                            as={motion.div}
                            layoutId={`card-body-${id}`}
                            variants={"card-body"}
                            zIndex="2"
                            animate
                        >
                            <Card.Title text={name} as="h4"/>
                            <Card.Text text={subtitle} className=""/>
                            <Card.Link to={`/packages/overview/${id}`} text="VIEW PACKAGE" variant="dotted" onClick={()=>dispatch(togglePackageDetailsPage(id))}/>
                        </Card.Body>
                        <Card.Link 
                            className="d-block d-lg-none h-100" 
                            to={`/packages/overview/${id}`} 
                            text=" " 
                            onClick={()=>dispatch(togglePackageDetailsPage(id))}
                        />
                    
                </Card>
             
                <Card.Title text={name} className="d-block d-lg-none" as="h6" color="white" textAlign="center" fontSize=".75rem"/>
               
            </Col>
    )
}


export default PackageCard
