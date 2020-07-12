import styled from "styled-components";
import css from '@styled-system/css'
import ComposeBoxHelper from "../../../utils/style/composeBox";
import { motion } from "framer-motion";
import Box from "../../../elements/Box";


let heightMediaQueries=(totalItems)=> ({
        maxHeight: {
            _: `calc((80vw / ${totalItems ? totalItems : 8}) / 1.5)`,
            sm: `calc((80vw / ${totalItems ? totalItems : 8}) / 1.5)`,
            md: `calc((80vw / ${totalItems ? totalItems : 8}) / 2)`
        },
        maxWidth:{
            _: '100%',
            sm: '100%',
            md: '100%',
            lg: '80%'
        },

  
})


const positionBreakPoints = ({mediaQueries})=>css({
    [mediaQueries.lg]:{
        position: "unset",
        margin: "0 auto"
    },

})



const IndicatorWrapper = styled(Box).attrs(props =>({
    as: motion.div,
    className: "container-fluid Indicator-wrapper"
}))`
    
    ${ComposeBoxHelper}
    display: ${props => props.display ? props.display : "flex"};
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    margin: 2rem auto;
    max-height: 2rem;
    height: 100%;
    flex: 1 1 auto;
    flex-direction: row;
    ${({theme}) => positionBreakPoints(theme)}
    position: absolute;
    bottom: 5%;
`

export default IndicatorWrapper

IndicatorWrapper.defaultProps = {
    ...heightMediaQueries()
}