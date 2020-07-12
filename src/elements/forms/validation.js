import styled from "styled-components"
import Box from "../Box"

const Validation = styled(Box).attrs(props =>({
    as: 'span',
    className: "form-validation needs-validation",
    children: props.meta
}))``

export default Validation