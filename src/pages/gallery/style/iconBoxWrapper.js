import styled from "styled-components";
import ComposeBoxHelper from "../../../utils/style/composeBox";
import css from '@styled-system/css'
import { motion } from "framer-motion";


const flexBoxColumn = {
    lg: 9,
    sm: 12
}

const dronesIconMediaQuery =({mediaQueries})=>css({
    [mediaQueries.lg]: {
        maxWidth: "4rem",
        maxHeight: "2rem",
    }
})

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
        ' &.active':{
            fill: "white"
        }
    }
})

const textMediaQueries = ({colors, mediaQueries}) =>css({
    [mediaQueries.lg]:{
        color: colors.whites[9],
        ' &.active':{
            color: "white"
        }
    }
})


const IconBoxWrapper = styled(motion.div).attrs({
    className: "IconBoxContainer col"
})`
    ${ComposeBoxHelper}
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    
    ${({margin, direction}) =>({
        flexDirection: direction || "row",
        margin: margin || "1rem auto 0 auto"
    })};

    

 svg {
    min-height: 1rem;
    max-height: 1.5em;
    max-width: 4rem;
    fill: ${({theme})=> theme.colors.blacks[5]};
     &.active {
        fill: ${({theme})=> theme.colors.blacks[9]};
    }
    ${({theme}) => svgMediaQuery(theme)};

}
.Drones-icon{
    max-width: 3rem;
    min-height: 1.5rem;
    ${({theme})=> dronesIconMediaQuery(theme)}
}

p{
   color: ${({theme})=> theme.colors.blacks[5]};
   &.active {
        color: ${({theme})=> theme.colors.blacks[9]};
    }
    ${({theme}) =>textMediaQueries(theme)}
}

`

export default IconBoxWrapper

IconBoxWrapper.defaultProps ={
    
    flexBoxColumn,
}

//${({active, theme}) => handleMediaQueries(svgMediaQuery(active, theme))}