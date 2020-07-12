import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveId } from '../redux/actions'
import IndicatorWrapper from '../style/indicatorWrapper'
import Chevron from '../../../elements/chevron'
import Indicator from '../style/indicator'


const Indicators = ({indicatorsPerPage, pageItems, activeId, prev, next}) => {

    const dispatch = useDispatch()

    return (
        <IndicatorWrapper totalItems ={indicatorsPerPage} lg={12} >                          
            <Chevron 
                icon="leftChevron" 
                position="absolute" 
                left="7%" 
                maxHeight="3rem" 
                onClick={()=>dispatch(setActiveId(prev))} 
            />

                {pageItems !== undefined && pageItems.map(item => {
                let active = item.id === activeId
                    
                return (
                    <Indicator 
                        active={active} 
                        totalItems={indicatorsPerPage} 
                        onClick={()=>dispatch(setActiveId(item))}
                        key={item.id}
                    />
                )
            })}

            <Chevron icon="rightChevron" position="absolute" right="7%" maxHeight="3rem" onClick={()=>dispatch(setActiveId(next))}/>
    </IndicatorWrapper>
    )
}



export default Indicators
