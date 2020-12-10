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
    border-left: 1px dotted white;
    
    
   

`

export default RightControls