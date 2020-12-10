import React from 'react'

import IndicatorWrapper from '../style/indicatorWrapper'

import Chevron from '../../../elements/chevron'
import Indicator from '../style/indicator'
import { activeVideo } from '../../../components/video/selectors'
import { shallowEqual, useSelector } from 'react-redux'


    const Indicators = ({indicatorsPerPage, pageItems, activeMedia, next, prev, dispatch}) => {
    
    const { id } = activeMedia

    const handleIndicator = (active, itemId) => !active && dispatch({id: itemId})

    const {
        playing
    } = useSelector(state => activeVideo(state), shallowEqual)

    console.log("playing", playing)

    return (
        <IndicatorWrapper totalItems={indicatorsPerPage} lg={12} playing={playing}>                          
            <Chevron 
                icon="leftChevron" 
               
                
                onClick={()=>dispatch({type: 'prev'})}
                display="inline" 
            />

                {pageItems !== undefined && pageItems.map(item => {
                let active = item.id === id

                
                    
                return (
                    <Indicator 
                        active={active} 
                        totalItems={indicatorsPerPage} 
                        onClick={()=>handleIndicator(active, item.id)}
                        key={item.id}
                    />
                )
            })}

            <Chevron 
                display="inline" 
                icon="rightChevron" 
              
                
                onClick={()=>dispatch({type: 'next'})}
            />
    </IndicatorWrapper>
    )
}



export default Indicators
