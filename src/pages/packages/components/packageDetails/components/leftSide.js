import styled from "styled-components";
import React from 'react'
import LeftPage from "../style/footerLeft";
import Container from "react-bootstrap/Container";
import Description from "../style/decription";
import { useCycle, motion } from "framer-motion";

const LeftSide = ({name, price, id, overview, onClick}) => {

    const [isOpen, setisOpen] = useCycle({
        height: 0,
        opacity: 0
    },{
        height: "100%",
        opacity: 1,
        
    })

    return(
        <LeftPage key={id} className="p-0 overflow-hidden" >
            <LeftPage.name name={name}/>
                <LeftPage.price price={price}/>
            <LeftPage.view text="VIEW MEDIA" variant="dotted" />
            <LeftPage.view 
                text="VIEW DETAILS" 
                className="d-block d-lg-none" 
                variant="dotted" 
              
                onClick={()=>setisOpen()}

            />
            <Description text={overview} as={motion.div} animate={isOpen}/>
        </LeftPage>
       

    )
}

export default LeftSide