import styled from "styled-components"
import Icon from "../../icon"
import css from '@styled-system/css'
import Box from "../../../elements/Box";

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


const handleChevronDirection = ({rightChevron, leftChevron, fill, theme, centered}) =>{
    let position = {}
 
    if(centered){
        position.transform= "translateY(150%)";
    }

    if(rightChevron) {
        position.right = "-10%"
    }

    if(leftChevron){
        position.left = "-10%"
    }

    return {
        ...position,
        fill: fill ? fill : theme.colors.greys[9]
    }
}
const Chevron = styled(Box).attrs(props =>({
    as: Icon,
    ...handleIcon(props)
}))`
   
   
    
    max-height: 6rem;
    display: none;
    position: relative;
    width: 100%;
    max-width: 5rem;
    margin: auto 0;
   
    ${mediaQueries};
    ${ handleChevronDirection };

`

export default Chevron
