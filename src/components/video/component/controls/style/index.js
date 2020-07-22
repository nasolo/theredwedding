import Box from "../../../../../elements/Box";
import styled from "styled-components";


export const Seek = styled(Box).attrs(props =>({
    as: 'input',
    type: 'range',
    value: props.value,
    min: 0,
    max: 0.999999,
    step: 'any'
}))`
    
`

