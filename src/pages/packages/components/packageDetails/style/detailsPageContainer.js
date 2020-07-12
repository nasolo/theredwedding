import styled from "styled-components"
import Box from "../../../../../elements/Box"
import Container from 'react-bootstrap/Container'
import { motion } from "framer-motion"



const DetailPageContainer = styled(Box).attrs(props =>({
    as: motion.div,
    layoutId: props.id,
    className: "detailsPageContainer container"
}))`

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    max-height: 100vh;
    width: 100%;
    max-width: 100vw;
    background: white;
    z-index: 101;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    

`


export default DetailPageContainer


DetailPageContainer.defaultProps ={
    fluid: true,
    animate: true
}