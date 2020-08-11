import React from 'react'
import PackageList from './list'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import PackageDetails from '../packageDetails'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'


import { packageOverview }  from '../../redux/selectors'


const Store = ({match}) => {

    const { id } = match.params

   return (
        <>
        <PackageList selectedId={id}/>
             
             <AnimatePresence initial={false}>
                 {id && <PackageDetails id={id}/>}
             </AnimatePresence>
        </>
    )
}



const WeddingPackages =()=> {
    
    const dispatch = useDispatch()

    const { activePageId, isPageOpen } = useSelector(state =>packageOverview(state), shallowEqual )

    return(
        
        <AnimateSharedLayout type="crossfade">
          
            <Router>
                <Route path={["/packages/overview/:id", "/packages"]} component={Store}/>
            </Router>
               
        </AnimateSharedLayout>


    )
}


export default WeddingPackages