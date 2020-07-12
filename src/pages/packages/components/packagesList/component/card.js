import React from 'react'
import Card from '../../../../../elements/card'
import { motion } from 'framer-motion';
import { useBreakpoint } from 'react-laag'
import { useDispatch } from 'react-redux';
import Col from '../../../../../elements/col';
import { togglePackageDetailsPage } from '../../../redux/actions';
import CardOverlay from '../../../style/imgOverlay';

const PackageCard = ({id, previewImage, name, subtitle}) =>{

    const isMobile = useBreakpoint(960)
    const dispatch = useDispatch()
    
    return(
        <Col className="mb-4">
                <Card 
                    className="bg-transparent text-white text-center h-100"
                    as={motion.div}
                    layoutId={`card-${id}`}
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
                        className="p-3"
                        as={motion.div}
                        layoutId={`card-body-${id}`}
                        variants={"card-body"}
                        zIndex="2"
                        animate
                    >
                        <Card.Title text={name} as="h4"/>
                        <Card.Text text={subtitle} className="d-none d-lg-block"/>
                        <Card.Link to={id} text="VIEW PACKAGE" className="d-none d-lg-block"  variant="dotted" onClick={()=>dispatch(togglePackageDetailsPage(id))}/>
                    </Card.Body>
                </Card>
            </Col>
    )
}


export default PackageCard
