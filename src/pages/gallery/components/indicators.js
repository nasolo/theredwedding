import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveId } from '../redux/actions'
import { bindActionCreators } from 'redux'
import IndicatorWrapper from '../style/indicatorWrapper'
import Chevron from '../../../elements/chevron'
import Indicator from '../style/indicator'


const Indicators = ({indicatorsPerPage, pageItems, activeMedia, next, prev, dispatch}) => {

    


    
    const { id } = activeMedia

    const handleIndicator = (active, itemId) => !active && dispatch({id: itemId})

    return (
        <IndicatorWrapper totalItems={indicatorsPerPage} lg={12} >                          
            <Chevron 
                icon="leftChevron" 
                position="absolute" 
                left="7%" 
                maxHeight={["2rem",null, "3rem"]}
                onClick={()=>dispatch({type: 'prev'})}
                display="inline" 
            />

                {pageItems !== undefined && pageItems.map(item => {
                let active = item.id === id

                console.log(id, active)
                    
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
                position="absolute" 
                right="7%"  
                maxHeight={["2rem",null, "3rem"]} 
                onClick={()=>dispatch({type: 'next'})}
            />
    </IndicatorWrapper>
    )
}



export default Indicators
