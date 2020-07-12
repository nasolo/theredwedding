import React from 'react'
import { useCycle } from 'framer-motion'

import Footer from '../../style/galleryFooter'
import Heading from './heading'
import { mobileFooterVariants } from '../../assets/motionVariants'

import FilterNavigation from './suggestionBox'

const PageFooter = ({isDesktop}) => {
    const [animateFooter, cycle] = useCycle(false, true)
    const shouldOpen = isDesktop & animateFooter
    const {container, items} = mobileFooterVariants

    return (
        <Footer 
            animate={shouldOpen ? "visible": "hidden"}
            variants={isDesktop && { ...container }} 
            onClick={()=> !animateFooter && cycle()} 
            onPan={()=> !animateFooter && cycle()} 
        >
            
        <Heading isDesktop={isDesktop} variants={items} onClick={cycle}/>
        
        
        
        <FilterNavigation variants={items}/>
    
        </Footer>
    )
}

export default PageFooter