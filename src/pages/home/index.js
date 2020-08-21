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
        setPageItem, 
        currentPageItems,
        slideLeft,
        slideRight,
    } = carouselData

const makeGetAllHeaderData = useMemo(allHeaderSelectors.allHeaderData, [])
const { 
        cards
      } = useSelector(state => makeGetAllHeaderData(state), shallowEqual)


const handleChevrons = ( type ) =>{
    if(!type) return

    if(type === 'leftChevron'){
        return slideLeft()
    } else{
        return slideRight()
    }
}



    return(
        <SlideContainer>
            <Carousel getCarouselInfo={handleCarouselData}>
                {cards.map((card, i) =>(
                    <SliderContent {...card} key={card.id}/>
                ))}
            </Carousel>
            <Indicators cards={currentPageItems ? currentPageItems : cards} activeIndex={activeIndex} handleIndicator={setPageItem}/>  
            <Chevrons handleChevens={handleChevrons} chevrons={["leftChevron", "rightChevron"]} />
        </SlideContainer>
    )
}

export default CardCarousel