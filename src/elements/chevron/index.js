import styled from "styled-components"
import Icon from "../../components/icon"
import css from '@styled-system/css'
import Box from "../../elements/Box";
import { maxHeight } from "styled-system";
import { nanoid } from "@reduxjs/toolkit";


const handleIcon = ({rightChevron, leftChevron}) => {
   
    if(rightChevron === undefined && leftChevron === undefined){
        return ;
    }
    return {
        icon: rightChevron ? "rightChevron" : leftChevron ? "leftChevron" : "wrong"
    }
}


const mediaQueries = ({theme}) =>css({
    [theme.mediaQueries.xl]: {
        display: "inline"
    },
    [theme.mediaQueries.lg]: {
        display: "inline"
    }
})


const handleChevronDirection = ({rightChevron, leftChevron, fill, theme, centered, icon, left, right}) =>{
    let position = {}
 
    if(centered){
        position.transform= "translateY(150%)";
    }

    if(rightChevron || icon.toLowerCase() === "rightChevron") {
        position.right = right ? right : "-10%"
        position.marginRight = "0"
    }

    if(leftChevron ||  icon.toLowerCase() === "leftChevron"){
        position.left = left ? left : "10%"
        position.marginLeft = "0"
    }

    return {
        ...position,
        fill: fill ? fill : theme.colors.greys[9]
    }
}
const Chevron = styled(Box).attrs(props =>({
    as: Icon,
    ...handleIcon(props),
    key: nanoid()
}))`
   

    ${props => ({
        maxHeight: props.maxHeight ? props.maxHeight : "6rem",
        maxWidth: props.maxWidth ? props.maxWidth : "5rem",
        display: props.display ? props.display : "none",
        position: props.position ? props.position : "relative"
    })};

    width: 100%;
    z-index: 1;
    margin: auto;
   
    ${mediaQueries};
    ${ handleChevronDirection };

`





export default Chevron
