
import React, { useState, useEffect } from 'react'


// import selectors


//styled component dependencies
import DetailPageContainer from './style/detailsPageContainer'
import Close from './style/closeIcon'
import FooterContainer from './style/footerContainer'
import Row from 'react-bootstrap/Row'
import LeftSide from './components/leftSide'
import RightSide from './components/rightSide'
import LeftChevron from './style/leftChevron'
import CarouselControls from './style/carouselControls'
import RightChevron from './style/rightChevron'
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, shallowEqual } from 'react-redux';
import allSelectors from '../../redux/selectors';
import BackgroundCarousel from './components/backgroundCarousel'


const { filterMediaPackage } = allSelectors

const PackageDetails = ({id}) => {
    
    const [page, setPage] = useState({
        index: 0,
        direction: 0
    })

    console.log(page)
    
    const {
        details,
        name,
        price,
        next,
        prev,
        activeMedia
    } = useSelector(state => filterMediaPackage(state, id, page.index), shallowEqual)

    const moveRight = next ? { ...page, index: next, direction: 1 } : page
    const moveLeft = prev ? { ...page, index: prev, direction: -1 } : page

    return (
        <DetailPageContainer id={id} key={`details-${id}`} layoutId={`${id}`}>
    
        <BackgroundCarousel page={page} setPage={setPage} next={moveRight} prev={moveLeft} media={activeMedia} id={id}/>

        <Close/>

        <CarouselControls
            as={motion.div}
            animate
        >
            <LeftChevron onClick={()=>setPage(moveLeft)}/>
            <RightChevron onClick={()=>setPage(moveRight)}/>
        </CarouselControls>
 
        <FooterContainer
           as={motion.div}
           animate
        >
            <Row className="justify-content-center">
                <LeftSide name={name} price={price} id={id} overview={details.overview}/>
                <RightSide details={details} id={id}/>
            </Row>
        </FooterContainer>
    </DetailPageContainer>
    )

}

export default PackageDetails