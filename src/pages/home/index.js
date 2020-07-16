import React, {  useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'


import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import SliderContent from './component/card'
import allHeaderSelectors from './redux/selectors'

//redux actionCreators {business logic}
import { 
        handleChevrons
    } from './redux/actionCreators'
import { nextCardById, prevCardById } from './redux/actions'
//styled components

import Indicators from './component/indicators';
import SlideContainer from '../../elements/slidecontainer';

import Paralax from '../../elements/paralax';
import Drag from '../../elements/drag';
import Chevrons from './component/chevrons';
import handleOnDragEnd from '../../utils/actionCreators/handleDragEnd'
import { variants } from './variants'

// Bootstrap Components


const CardCarousel = props => {



const makeGetAllHeaderData = useMemo(allHeaderSelectors.allHeaderData, [])
const { 
      cards,
       direction,
       activeId,
       activeMedia,
       next,
       prev
      } = useSelector(state => makeGetAllHeaderData(state), shallowEqual)

const dispatch = useDispatch()

    return(
        
        <SlideContainer>
            <Paralax>
                <AnimatePresence custom={direction} initial={false}>
                    <Drag 
                        className="h-100 vw-100" 
                        position="absolute"
                        custom={direction} 
                        onDragEnd={(event, info)=>dispatch(handleOnDragEnd(event, info, nextCardById(next), prevCardById(prev)))}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                       
                        key={activeId}
                    >
                        <SliderContent {...activeMedia}/>
                    </Drag>
                </AnimatePresence>
              
                    <Indicators cards={cards} id={activeId}/>
               
                    <Chevrons dispatch={(chevron)=>dispatch(handleChevrons(chevron))} chevrons={["leftChevron", "rightChevron"]} />
                
        </Paralax>
    </SlideContainer>

    )

  
}

export default CardCarousel