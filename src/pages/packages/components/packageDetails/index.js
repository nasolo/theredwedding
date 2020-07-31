
import React, { useState, useEffect } from 'react'
import { wrap } from "@popmotion/popcorn";


// import selectors


//styled component dependencies
import DetailPageContainer from './style/detailsPageContainer'
import BgImage from './style/bgImage'
import CloseBtn from './style/closeIcon'
import FooterContainer from './style/footerContainer'
import Row from 'react-bootstrap/Row'
import LeftSide from './components/leftSide'
import RightSide from './components/rightSide'
import LeftChevron from './style/leftChevron'
import CarouselControls from './style/carouselControls'
import RightChevron from './style/rightChevron'
import { motion } from 'framer-motion';
import { useSelector, shallowEqual } from 'react-redux';
import allSelectors from '../../redux/selectors';

const { filterMediaPackage } = allSelectors

const PackageDetails = ({close, id}) => {
    
    const [activeIndex, setActiveIndex] = useState(0)
    const {
        details,
        name,
        price,
        next,
        prev,
        activeMedia
    } = useSelector(state => filterMediaPackage(state, id, activeIndex), shallowEqual)


    const imagePath = "../assets/images/packages/wedding/"

    return (
        <DetailPageContainer id={id} key={`details-${id}`} layoutId={`${id}`}>
    
        <BgImage 
            src={`${imagePath}${activeMedia}`}
            layoutId={`image-${id}`}    
        />
        <CloseBtn onClick={close}/>

        <CarouselControls
            as={motion.div}
            animate
        >
            <LeftChevron onClick={()=>setActiveIndex(next)}/>
            <RightChevron onClick={()=>setActiveIndex(prev)}/>
        </CarouselControls>
 
        <FooterContainer
           as={motion.div}
           animate
        >
            <Row>
                <LeftSide name={name} price={price} id={id} overview={details.overview}/>
                <RightSide details={details}/>
            </Row>
        </FooterContainer>
    </DetailPageContainer>
    )

}

export default PackageDetails