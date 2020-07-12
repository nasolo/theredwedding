import styled from "styled-components"
import Box from "../Box"

const Input = styled(Box).attrs(props =>({
    as: 'input',
    className: 'form-control'
}))``

export default Input