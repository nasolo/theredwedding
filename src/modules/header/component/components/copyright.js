import React from 'react'
import Navbar from '../../../../elements/navbar/navbar'
import InnerWrapper from '../../style/innerWrapper'
import P from '../../../../elements/p'
import { motion } from 'framer-motion'
import { siblings, parent } from '../animations/sideDrawer'


const Copyright = ({text, isOpen}) => (

    <InnerWrapper 
        textAlign="left" 
        order="99"
        height="auto" 
        className="w-100" 
        as={motion.div} 
        animate={isOpen ? "open" : "closed"}
        initial="initial"
        enter="open"
        exit="closed"
        variants={parent} 
    >
        <P as={motion.p} variants={siblings} color="black">
            {text}
        </P>
    </InnerWrapper>

)

export default Copyright