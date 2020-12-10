import styled from "styled-components"
import Box from "../../../../../elements/Box"

const ControlsWrapper = styled(Box).attrs(props =>({
    className: `video-controls-wrapper ${!props.playing && `d-none` }`
}))`

    
    text-align: left;
    display: flex;
    width: 100%;
    
    
    padding: 0;
    background: transparent;
    height: 100%;
    align-content: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    

`

export default ControlsWrapper