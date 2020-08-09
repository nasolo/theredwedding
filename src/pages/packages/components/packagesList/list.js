import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import Card from '../../../../elements/card'
import PackageCard from './component/card'
import allSelectors from '../../redux/selectors'



const PackageList =()=>{
    
    const { getAllPackages } = allSelectors
    
    const {
        weddingPackages,
        activePageId
    } = useSelector(state => getAllPackages(state), shallowEqual)


    return (
        <Card.Deck sm={3} cols={3} margin="1rem auto 1rem auto">
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



