import React from 'react'
import PackageList from './list'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import PackageDetails from '../packageDetails'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { togglePackageDetailsPage } from '../../redux/actions'

import { packageOverview }  from '../../redux/selectors'






const WeddingPackages =()=> {
    
    const dispatch = useDispatch()

    const { activePageId, isPageOpen } = useSelector(state =>packageOverview(state), shallowEqual )

    return(
        
        <AnimateSharedLayout type="crossfade">
          
                <PackageList selectedId={activePageId}/>
                <AnimatePresence initial={false}>
                    {isPageOpen & activePageId !== "" ? 
                        <PackageDetails id={activePageId} close={()=> dispatch(togglePackageDetailsPage())}/>
                    : null}
                </AnimatePresence>
               
        </AnimateSharedLayout>


    )
}


export default WeddingPackages