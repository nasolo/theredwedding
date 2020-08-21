import React, { useCallback, useEffect, useMemo, useState } from 'react'

import {useSelector, useDispatch, shallowEqual } from 'react-redux'
import VideoPlayer from '../../components/video'

//customer components and elements
import SlideContainer from '../../elements/slidecontainer'
import Container from '../../elements/container'

//redux actions and action creators
import allSelectors from './redux/selectors'
import { updateMedia } from './redux/actions'


//Custom Hooks
import useWindowSize from '../../utils/hooks/useWindowSize'

//motion variants
import Slider from './components/slider';
import ShareGallery from './components/shareGallery';
import Indicators from './components/indicators';
import PageFooter from './components/footer';
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'



const {allMediaData} = allSelectors



function usePageViews() {
  let location = useLocation();
  
  const dispatch = useDispatch()

  React.useEffect(() => {

    const {pathname, hash, state} = location

    const shouldDispatchMedia = pathname === '/gallery' && hash.includes('media')
    
    shouldDispatchMedia && dispatch(updateMedia({...state}))

      

  }, [location]);
}




const Gallery = props => {

    

    const [player, setPlayer] = useState({})
    const [carouselData, setcarouselData] = useState({})
    const isDesktop = useWindowSize().width <= 990
    const indicatorsPerPage = isDesktop ? 4 : 8
    const Controls = VideoPlayer.Controls
    const makeGetAllMediaData = useMemo(allMediaData, [])

  const { 
    activeIndex, 
    currentPageItems,
    slideRight,
    slideLeft,
    setPageItem
    
  } = carouselData




  
 //Extract gallery Data from selector
    const { 
            shareIcons,
            media,
         } = useSelector(state => makeGetAllMediaData(state, activeIndex), shallowEqual)
         
    //Declare component variable dependies
    
    const activeMedia = {
      ...media[activeIndex]
    }

    const shouldRenderVideoControls = activeMedia && ReactPlayer.canPlay(activeMedia.url)

    usePageViews()

      return (
        <SlideContainer className="d-flex flex-column" justifyContent="flex-end">
           

           <Slider media={media} fullscreen player={setPlayer} getCarouselData={setcarouselData} itemsPerPage={indicatorsPerPage}/>

            <Container 
              zIndex="100"
              display="flex"
              marginBottom="1rem"
            >
           <ShareGallery shareIcons={shareIcons}/>
           {shouldRenderVideoControls && <Controls player={player}/>}
          </Container>
          
           <Indicators 
              indicatorsPerPage={indicatorsPerPage} 
              pageItems={currentPageItems} 
              activeMedia={activeMedia} 
              next={slideRight} 
              prev={slideLeft} 
              handleIndicator={setPageItem}
            />

           <PageFooter isDesktop={isDesktop}/>
                   
      </SlideContainer>
    )
}

export default Gallery
//<Controls player={playerRef}/>

//<Slider player={setPlayer} activeMedia={activeMedia} prev={prev} next={next} direction={direction}/>