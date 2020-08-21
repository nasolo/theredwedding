import React, { useEffect } from 'react'
import Carousel from '../../../modules/carousel'
import Media from '../../../components/media'
import CarouselWrapper from '../style/carouselWrapper'

const Slider = ({media, getCarouselData, fullscreen = 'false', itemsPerPage, ...rest}) => {


    const handleCarouselData = (data) => getCarouselData(data)

    return (

    <CarouselWrapper>
        <Carousel getCarouselInfo={handleCarouselData} itemsPerPage={itemsPerPage}>
            {media.map((media, index) => <Media fullscreen={fullscreen} {...media} {...rest} key={`${media.id}-${index}-slider`}/>)}
        </Carousel>
    </CarouselWrapper>
    )

}

export default Slider