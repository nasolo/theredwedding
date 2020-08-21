import styled from "styled-components";
import css from '@styled-system/css'
import ComposeBoxHelper from "../../../utils/style/composeBox";
import { motion } from "framer-motion";
import Box from "../../../elements/Box";




const mediaQueries = ({ mediaQueries }, totalItems) =>css({
    [mediaQueries.lg]:{
        position: "unset",
        margin: "0 auto",
        maxHeight: "5rem"
    }
})

const IndicatorWrapper = styled(Box).attrs(props =>({
    as: motion.div,
    className: "Indicator-wrapper"
}))`
    
    ${ComposeBoxHelper}
    display: ${props => props.display ? props.display : "flex"};
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    max-height: 2rem;
    height: 100%;
    width: 100%;
    flex: 1 1 auto;
    flex-direction: row;
    position: absolute;
    bottom: 5%;
 
    ${({theme, totalItems}) => mediaQueries(theme, totalItems)};
`

export default IndicatorWrapper

