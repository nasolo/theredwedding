import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Carousel from '../../modules/carousel'
import {useSelector, useDispatch, shallowEqual } from 'react-redux'
import VideoPlayer from '../../components/video'

//customer components and elements
import SlideContainer from '../../elements/slidecontainer'
import Container from '../../elements/container'

//redux actions and action creators
import allSelectors from './redux/selectors'
import { fetchMediaData } from './redux/actionCreators'
import { sliderHandler } from '../../utils/selectors/handleSlide'

//Custom Hooks

import useWindowSize from '../../utils/hooks/useWindowSize'

//motion variants
import Slider from './components/slider';
import ShareGallery from './components/shareGallery';
import Indicators from './components/indicators';
import PageFooter from './components/footer';
import ReactPlayer from 'react-player'
import Media from '../../components/media'


const {allMediaData} = allSelectors




const Gallery = props => {

    const dispatch = useDispatch()
    const [player, setPlayer] = useState({})
    const isDesktop = useWindowSize().width <= 990
    const indicatorsPerPage = isDesktop ? 4 : 8
    const Controls = VideoPlayer.Controls
    const makeGetAllMediaData = useMemo(allMediaData, [])

 //Extract gallery Data from selector
    const { 
            activeId, 
            media,
            direction,
            isFetching,
            shareIcons,
            next, 
            prev, 
            activeMedia,
            currentPageItems
         } = useSelector(state => makeGetAllMediaData(state, indicatorsPerPage), shallowEqual)
         
    //Declare component variable dependies
    const fetchAllData = useCallback(()=> { dispatch(fetchMediaData())}, [])
    const shouldRenderVideoControls = activeMedia && ReactPlayer.canPlay(activeMedia.url)


    
  
    //Handle side effects
    useEffect(() => {
        media.length < 1 & !isFetching && fetchAllData()
    })
    
      return (
        <SlideContainer className="d-flex flex-column" justifyContent="flex-end">
           
           <Carousel>
            
              <Media />
           
           </Carousel>

            <Container 
              zIndex="100"
              display="flex"
              marginBottom="1rem"
            >
           <ShareGallery shareIcons={shareIcons}/>
           {shouldRenderVideoControls && <Controls player={player}/>}
          </Container>
           <Indicators indicatorsPerPage={indicatorsPerPage} pageItems={currentPageItems} activeId={activeId} next={next} prev={prev}/>
           <PageFooter isDesktop={isDesktop}/>
                   
      </SlideContainer>
    )
}

export default Gallery
//<Controls player={playerRef}/>

//<Slider player={setPlayer} activeMedia={activeMedia} prev={prev} next={next} direction={direction}/>