import styled, { css } from "styled-components";
import Box from "../../../../../elements/Box";


const mediaQueries =({mediaQueries})=>css({
    [mediaQueries.sm]:{
        
    },
    [mediaQueries.sm]:{
        
    }
}) 

const LeftControls = styled(Box).attrs(props =>({
    className: 'left-controls'
}))`

    margin: 0;
    padding: 0;
    flex: 0 1 15%;
    justify-content: flex-start;
    display: flex;
    ${({theme}) => mediaQueries(theme)}

`

export default LeftControls