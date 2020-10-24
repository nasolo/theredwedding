import styled from "styled-components"
import Box from "../../../../../elements/Box"

const ResetText = styled(Box).attrs(props => ({
    className: 'reset-text',
    children: props.text
}))`

    margin: 1px 0px 0px 8px;
    line-height: 1.18;
    color: white;


`

export default ResetText