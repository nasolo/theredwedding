import styled from "styled-components"
import Box from "../Box"

const Label = styled(Box).attrs(props=>({
    as: 'label',
    className: 'form-label'
}))``

export default Label