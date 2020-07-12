import React, { useCallback, useEffect, useMemo } from 'react'
import {useSelector, useDispatch, shallowEqual } from 'react-redux'

//customer components and elements
import SlideContainer from '../../elements/slidecontainer'

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


const {allMediaData, filterGalleryByTags} = allSelectors




const Gallery = props => {

    const dispatch = useDispatch()
    const isDesktop = useWindowSize().width <= 990
  
  
//Redux Selectors
    const makeGetAllMediaData = useMemo(allMediaData, [])
    const { activeId, 
            media,
            activeIndex,
            direction,
            isFetching,
            shareIcons
         } = useSelector(state => makeGetAllMediaData(state), shallowEqual)
    
    
    //Declare component variable dependies
    const indicatorsPerPage = isDesktop ? 5 : 8
    const { next, 
            prev, 
            activeMedia,
            currentPageItems
        } = sliderHandler(media, activeId, indicatorsPerPage)



    const fetchAllData = useCallback(()=> { dispatch(fetchMediaData())}, [])
    
  
    //Handle side effects
    useEffect(() => {
        media.length < 1 & !isFetching && fetchAllData()
    })
    

      return (
        <SlideContainer className="d-flex flex-column" justifyContent="flex-end">
           
           <Slider activeMedia={activeMedia} prev={prev} next={next} direction={direction}/>
           <ShareGallery shareIcons={shareIcons}/>
        
           <Indicators indicatorsPerPage={indicatorsPerPage} pageItems={currentPageItems} activeId={activeId} next={next} prev={prev}/>
           <PageFooter isDesktop={isDesktop}/>
                   
      </SlideContainer>
    )
}

export default Gallery
