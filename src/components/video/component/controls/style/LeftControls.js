import styled, { css } from "styled-components";
import Box from "../../../../../elements/Box";


const mediaQueries =({mediaQueries})=>css({
    [mediaQueries.sm]:{
        maxWidth: "15%"
    },
    [mediaQueries.sm]:{
        maxWidth: "10%"
    }
}) 

const LeftControls = styled(Box).attrs(props =>({
    className: 'left-controls'
}))`

    margin: 0;
    padding: 0;
    
    width: 100%;
    flex: 1 1 auto;
    max-width: 25%;
    display: inline-block;
    ${({theme}) => mediaQueries(theme)}

`

export default LeftControls