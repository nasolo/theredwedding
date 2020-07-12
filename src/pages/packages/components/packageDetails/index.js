
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


const handleMediaSlide = (media, activeImage) =>{
    if(media === undefined){
        return false
    }

    const paginate = (direction) => wrap(0, media.length, activeImage + direction)

    return media.reduce((media, currVal) =>{
            media.activeImage = activeImage
            media.nextItem  = paginate(1)
            media.prevItem = paginate(-1)
        return media
    },{})
}


const { filterMediaPackage } = allSelectors


const PackageDetails = ({close, id}) => {

    
    const [activeMedia, setActiveMedia] = useState(0)
    const {
        details,
        media,
        name,
        price,
    } = useSelector(state => filterMediaPackage(state, id), shallowEqual)


    const imagePath = "assets/images/packages/wedding/"

    const {
        activeImage,
        nextItem,
        prevItem
    } = handleMediaSlide(media, activeMedia)

    return (
        <DetailPageContainer id={id} key={`details-${id}`} layoutId={`${id}`}>
        <BgImage 
            src={setActiveMedia !== "" ? `${imagePath}${media[activeImage]} ` : null}
            layoutId={`image-${id}`}    
        />
        <CloseBtn onClick={close}/>

        <CarouselControls
            as={motion.div}
            animate
        >
            <LeftChevron onClick={()=>setActiveMedia(prevItem)}/>
            <RightChevron onClick={()=>setActiveMedia(nextItem)}/>
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