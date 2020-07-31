import styled from "styled-components"
import Box from "../../../../../elements/Box"


const RightControls = styled(Box).attrs(props =>({
    className: `right-controls`
}))`

    height: 100%;
    flex-wrap: nowrap;
    overflow: hidden;
    text-align: left;
    vertical-align: center;
    flex: 1 1 auto;
    max-width: 30%;
   

`

export default RightControls