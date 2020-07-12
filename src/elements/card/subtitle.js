import styled from "styled-components"
import Box from "../Box"

const Subtitle = styled(Box).attrs(props =>({
    as: "h4",
    className: "card-subtitle",
    children: props.text
}))``

export default Subtitle