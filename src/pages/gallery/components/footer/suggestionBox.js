import React from 'react'

import FilterNavContainer from '../../style/filterNavigationContainer'
import Col from 'react-bootstrap/Col'
import AutoComplete from '../../../../components/taginput'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { userTags, allMediaTags } from '../../redux/selectors'
import { updateUserTags } from '../../redux/actionCreators'
import Buttons from '../../../../elements/buttons/buttons'
import { removeAllFilterTags } from '../../redux/actions'
import FilterIcons from './filterIcons'

const FilterNavigation = ({variants, isDesktop}) => {

    const dispatch = useDispatch()
    const tags = useSelector(state=> allMediaTags(state), shallowEqual)
    const userEnteredTags = useSelector(state => userTags(state), shallowEqual)

   return (
    <FilterNavContainer variants={isDesktop && {...variants}} >
        <FilterIcons/>
        <Col lg={3} className="mt-3">
        <AutoComplete 
            autoCompleteData={tags} userTags={userEnteredTags} 
            handleTag={(tag)=>dispatch(updateUserTags(tag))} 
            removeUserTag={(tag)=>dispatch(updateUserTags(tag))}
        />
        </Col>
        <Col sm={12} md={12} className="text-center d-lg-none d-xl-none mt-3">
            <Buttons onClick={()=> dispatch(removeAllFilterTags())}>REFRESH</Buttons>
        </Col>
    </FilterNavContainer>
        )
}

export default FilterNavigation
