import React, { useState } from 'react'
import {AccordianHeader, AccordianBody, AccordianWrapper} from './components'
import { AnimatePresence } from 'framer-motion'
import Card from '../../elements/card'
import P from '../../elements/p'
import Heading from '../../elements/heading'


const collapse = {
    open:{ 
        opacity: 1, 
        height: "auto", 
        transition: {
            duration: .8, 
         
            ease: [0.04, 0.62, 0.23, 0.98]
            
        }
    },
    collapsed:{ 
        opacity: 0, 
        height: 0,
        transition: {
            duration: 0.8,
        }
        
    }
}


const InfoVariant = {
    collapsed: { 
        scale: 0.8,
        transition:{
            duration: 0.1
        } }, 
    open: { 
        scale: 1,
        transition:{
            duration: 0.8
        }
    }
}

const AccordianItem = ({i, expanded, setExpanded, description, heading}) =>{
    const isOpen = i === expanded
    return(
        <>
            <AccordianHeader
                initial={false}
                onClick={()=> setExpanded(isOpen ? false : i)}
            >   
              <Heading as="h2" text={heading} className="text-white" fontSize={{_:"1rem", lg:"2rem"}}/>
            </AccordianHeader>

            <AnimatePresence initial={false} exitBeforeEnter>
                {isOpen && (
                    <AccordianBody
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={collapse}
                    >
                       <Card.Body variants={InfoVariant} >
                        <P fontSize={{_:".75rem", lg:"1rem"}}>{description} </P>
                        </Card.Body>
                     
                    </AccordianBody>
                )}
            </AnimatePresence>

        </>
    )
}


const Accordian = ({accordians}) => {
    const [expanded, setExpanded] = useState(0)
    return (
        <AccordianWrapper>
            {accordians.map((arordianInfo, i) => (
                <AccordianItem i={i} key={arordianInfo.id} expanded={expanded} setExpanded={setExpanded} heading={arordianInfo.heading} description={arordianInfo.description}/>
            ))}
         </AccordianWrapper>        
    )
}


export default Accordian


