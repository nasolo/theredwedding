import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import ComposeBoxHelper from '../../../utils/style/composeBox'
import { motion } from 'framer-motion'




const maxWidth =()=>({
    fluid: "fluid",
    maxWidth: {
        _:  "100vw",
        sm: "100vw",
        md: "100vw",
        lg: "80vw"
        
    }
})


const backgroundColor=()=>({
    bg: {
        _: "greys.13",
        sm: "greys.13",
        md: "greys.13",
        lg: "transparent"
    }
})


const Footer = styled(motion.div).attrs({
    className: "galleryFooter container-fluid"
})`
    ${ComposeBoxHelper}
    z-index: 1;
    margin: 0 auto;
    padding-bottom: 1em;
    display: flex;
    flex-direction: column;
    transform: translateZ(0);
    

`

const mediaQueries = {
    ...maxWidth(),
    ...backgroundColor()
}

Footer.defaultProps ={
    ...mediaQueries
}


export default Footer