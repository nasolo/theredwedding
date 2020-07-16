import styled from "styled-components"
import Box from "../Box"
import css from '@styled-system/css'




const Title = styled(Box).attrs(props =>({
    as: props.as ? props.as : "h1",
    className: `${props.as ? props.as : ""} card-title`,
    children: props.text
}))`


margin: auto;
font-weight: ${({fontWeight}) => fontWeight ? fontWeight : "900"};


`

export default Title