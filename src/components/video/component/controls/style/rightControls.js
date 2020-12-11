import styled, { css } from "styled-components"
import Box from "../../../../../elements/Box"

const RightControlsMediaQueries = ({theme}) =>css`
    ${theme.mediaQueries.lg}{
        flex: 0 0 20%;
    }

`

const RightControls = styled(Box).attrs(props =>({
    className: `right-controls`
}))`

    height: 100%;
    flex-wrap: nowrap;
    overflow: hidden;
    text-align: left;
    vertical-align: center;
    
    flex: 0 0 30%;
    
    
   

`

export default RightControls