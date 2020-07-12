import React from 'react'
import IndicatorsWrapper from '../style/indicatorswrapper'
import Indicator from '../../../elements/indicator'
import { useDispatch } from 'react-redux'
import { setActiveCardId } from '../redux/actionCreators'




const Indicators = ({cards, id}) => {

   const dispatch = useDispatch()

    return (
        <IndicatorsWrapper >
        {cards.map((card, index) => { 
            let active = card.id === id
                return (
                    <Indicator 
                    key={`${card.id}_${index}`} 
                    active={active}
                    onClick={()=>dispatch(setActiveCardId({...card, index}))}
                    />
                )
            })         
        }
    </IndicatorsWrapper>

    )
}

export default Indicators