import React, {  useMemo, useState } from 'react'



import { useSelector, shallowEqual } from 'react-redux'
import SliderContent from './component/card'
import allHeaderSelectors from './redux/selectors'

import Indicators from './component/indicators';
import SlideContainer from '../../elements/slidecontainer';

import Carousel from '../../modules/carousel'
import Chevrons from './component/chevrons';

// Bootstrap Components


const CardCarousel = props => {

    const [carouselData, setCarouselData] = useState({})
    const handleCarouselData = (data) => setCarouselData(data)
    const {
        activeIndex, 
        dispatch, 
        setActiveItem, 
        currentPageItems,
        paginatePrev,
        paginateNext,
        next,
        prev
    } = carouselData

const makeGetAllHeaderData = useMemo(allHeaderSelectors.allHeaderData, [])
const { 
        cards
      } = useSelector(state => makeGetAllHeaderData(state), shallowEqual)


const handleChevrons = ( type ) =>{
    if(!type) return

    if(type === 'leftChevron'){
        return dispatch(paginatePrev(prev))
    } else{
        dispatch(paginateNext(next))
    }
}

const handleIndicator = (index) => {
    return dispatch(setActiveItem(index))
}

    return(
        <SlideContainer>
            <Carousel getCarouselInfo={handleCarouselData}>
                {cards.map((card, i) =>(
                    <SliderContent {...card}/>
                ))}
            </Carousel>
            <Indicators cards={currentPageItems ? currentPageItems : cards} activeIndex={activeIndex} handleIndicator={handleIndicator}/>  
            <Chevrons handleChevens={handleChevrons} chevrons={["leftChevron", "rightChevron"]} />
        </SlideContainer>
    )
}

export default CardCarousel