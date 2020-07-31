import styled from "styled-components"
import Box from "../../../../../elements/Box"

const TimeDisplay = styled(Box).attrs(props => ({
    className: `time-display`
}))`

    font-size: .75em;
    display: inline-block;
    vertical-align: middle;
    padding: 0 5px;
    white-space: nowrap;
    line-height: 35px;

`

export default TimeDisplay