import styled from "styled-components";
import Col from "react-bootstrap/Col";
import ComposeBoxHelper from "../../../utils/style/composeBox";
import css from '@styled-system/css'
import { motion } from "framer-motion";


const flexBoxColumn = {
    lg: 9,
    sm: 12
}

const svgMediaQuery=({colors, mediaQueries})=>css({

    [mediaQueries.sm]:{
    maxWidth: "5rem",
    maxHeight: "1.5rem"
    
    },

    [mediaQueries.md]:{
        maxWidth: "6rem",
        maxHeight: "1.5rem"
    },

    [mediaQueries.lg]: {
        maxWidth: "5rem",
        maxHeight: "2rem",
        fill: colors.whites[9],
        
    }
})

const iconBoxMediaQueries =({colors, mediaQueries})=>css({
   [mediaQueries.sm]:{
       fontSize: "100%"
   },
   [mediaQueries.lg]:{
        fontSize: "100%",
        maxWidth: "7.5rem",
        flexDirection: "row",
        color: colors.whites[9],
        '.active': {
            color: "white",
            fill: "white"
        }
   }
})

const dronesIconMediaQuery =({mediaQueries})=>css({
    [mediaQueries.lg]: {
        maxWidth: "4rem",
        maxHeight: "2rem",
    },
    [mediaQueries.xl]: {
      
    }
})

const className = "w-100 mh-100"

const IconBoxWrapper = styled(motion.div).attrs({
    className: "IconBoxContainer col"
})`
    ${ComposeBoxHelper}
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin: 1rem auto 0 auto;
    
    

& .icon-box-wrapper {
    
    text-align: center;
    font-size: 70%;
    flex-shrink: 1;
    flex: auto;
    font-weight: 900;
    max-height: 3rem;
    max-width: 3rem;
    height: 100%;
    width: 100%;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: space-around;
    margin: auto 1%;
    cursor: pointer;
    color: ${({theme})=> theme.colors.blacks[5]};
    ${({theme})=>iconBoxMediaQueries(theme)};
    &.active{
        color: ${({theme})=> theme.colors.blacks[9]};
    }
}

 svg {
    height: 100%;
    margin: auto;
    flex: 1 1 auto;
    min-height: 1rem;
    max-height: 2em;
    max-width: 4rem;
    fill: ${({theme})=> theme.colors.blacks[5]};
    ${({theme}) => svgMediaQuery(theme)};

     &.active {
        fill: ${({theme})=> theme.colors.blacks[9]};
    }


}
.Drones-icon{
    max-width: 3rem;
    min-height: 1.5rem;
    ${({theme})=> dronesIconMediaQuery(theme)}
}


& p{
    margin: auto 3%;
   
}

`

export default IconBoxWrapper

IconBoxWrapper.defaultProps ={
    
    flexBoxColumn,
    className 
}

//${({active, theme}) => handleMediaQueries(svgMediaQuery(active, theme))}