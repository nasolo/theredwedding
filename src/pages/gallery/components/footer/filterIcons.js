import React from 'react'
import { filterBtnsIcons } from '../../redux/selectors'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import IconBoxWrapper from '../../style/iconBoxWrapper'
import IconBox from '../../../../components/iconbox'
import { handleFilters } from '../../redux/actionCreators'

const FilterIcons = props => {

    const dispatch = useDispatch()
    const filterBtnIcons = useSelector(state => filterBtnsIcons(state), shallowEqual)
    
    return (
        <IconBoxWrapper>
            {filterBtnIcons.map(icon => 
                <IconBox
                    key={icon.id}
                    icon={icon.icon} 
                    text={icon.text}
                    active={icon.active}
                    iconHeight="100%"
                    iconMaxHeight={icon.text === "Drones" ? "1.5rem" : `3rem`}
                    iconMinHeight={icon.text === "Drones" ? "1rem" : `1.5rem`}
                    onClick={()=>dispatch(handleFilters(icon))}
                />
            )}
        </IconBoxWrapper>
    )
}


export default FilterIcons