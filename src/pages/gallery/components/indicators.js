import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveId } from '../redux/actions'
import { bindActionCreators } from 'redux'
import IndicatorWrapper from '../style/indicatorWrapper'
import Chevron from '../../../elements/chevron'
import Indicator from '../style/indicator'


const Indicators = ({indicatorsPerPage, pageItems, activeMedia, next, prev, setPageItem}) => {

    


    
    const { id } = activeMedia

    const handleIndicator = (item) => console.log(item, pageItems)

    return (
        <IndicatorWrapper totalItems={indicatorsPerPage} lg={12} >                          
            <Chevron 
                icon="leftChevron" 
                position="absolute" 
                left="7%" 
                maxHeight={["2rem",null, "3rem"]}
                onClick={()=> prev()}
                display="inline" 
            />

                {pageItems !== undefined && pageItems.map(item => {
                let active = item.id === id
                    
                return (
                    <Indicator 
                        active={active} 
                        totalItems={indicatorsPerPage} 
                        onClick={()=>handleIndicator(item)}
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
                onClick={()=>next()}
            />
    </IndicatorWrapper>
    )
}



export default Indicators
