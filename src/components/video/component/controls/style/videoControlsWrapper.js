import styled from "styled-components"
import Box from "../../../../../elements/Box"

const ControlsWrapper = styled(Box).attrs(props =>({
    className: `video-controls-wrapper`
}))`

    
    text-align: left;
    display: flex;
    width: 100%;
    
    margin: 0;
    padding: 0;
    background: transparent;
    height: 100%;
    align-content: center;
    justify-content: center;
    flex-wrap: nowrap;
    

`

export default ControlsWrapper