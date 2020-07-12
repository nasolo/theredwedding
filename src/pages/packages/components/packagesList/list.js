import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { fetchAllPackagesData } from '../../redux/actionCreators'
import Card from '../../../../elements/card'
import PackageCard from './component/card'
import allSelectors from '../../redux/selectors'
import Container from 'react-bootstrap/Container'


const PackageList =()=>{
    
    const { getAllPackages } = allSelectors
    const dispatch = useDispatch()
    
    const {
        isFetching,
        weddingPackages,
        activePageId
    } = useSelector(state => getAllPackages(state), shallowEqual)

    //react useCallback to prevent multiple api request
    const fetchPackagesPageData = useCallback(()=>{
        dispatch(fetchAllPackagesData())
    },[])
        
    //initialize api call
    useEffect(()=>{
            !isFetching & weddingPackages.length < 1 && fetchPackagesPageData()
    },[])

    return (
        <Card.Deck sm={3} cols={3}>
            {weddingPackages !== undefined ? weddingPackages.map(card => (
                <PackageCard 
                    isSelected={card.id === activePageId}
                    {...card}
                />
            )) : null }
        
        </Card.Deck>
    )

}

export default PackageList



