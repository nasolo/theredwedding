import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveId } from '../redux/actions'
import { bindActionCreators } from 'redux'
import IndicatorWrapper from '../style/indicatorWrapper'
import Chevron from '../../../elements/chevron'
import Indicator from '../style/indicator'


const Indicators = ({indicatorsPerPage, pageItems, activeId, prev, next}) => {

    const dispatch = useDispatch()
    const paginate = bindActionCreators(setActiveId, dispatch)

    return (
        <IndicatorWrapper totalItems ={indicatorsPerPage} lg={12} >                          
            <Chevron 
                icon="leftChevron" 
                position="absolute" 
                left="7%" 
                maxHeight={["2rem",null, "3rem"]}
                onClick={()=>paginate(prev)}
                display="inline" 
            />

                {pageItems !== undefined && pageItems.map(item => {
                let active = item.id === activeId
                    
                return (
                    <Indicator 
                        active={active} 
                        totalItems={indicatorsPerPage} 
                        onClick={()=>paginate(item)}
                        key={item.id}
                    />
                )
            })}

            <Chevron 
                display="inline" 
                icon="rightChevron" 
                position="absolute" 
                right="7%"  
                maxHeight={["2rem",null, "3rem"]} 
                onClick={()=>paginate(next)}
            />
    </IndicatorWrapper>
    )
}



export default Indicators
