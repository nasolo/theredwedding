import styled from "styled-components"
import Box from "../Box"

const Text = styled(Box).attrs(props =>({
    as: "p",
    className: "card-text",
    children: props.text
}))`

 margin: auto;
`


export default Text