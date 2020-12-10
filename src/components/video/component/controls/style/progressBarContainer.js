import styled, { css } from "styled-components"
import Box from "../../../../../elements/Box"



const ProgressBarMediaQueries = ({theme}) => css`

${theme.mediaQueries.lg}{
    flex: 0 0 50%;
}

`

const ProgressBarContainer = styled(Box).attrs(props =>({
className: `progress-bar-container`
}))`
   
   
    padding: 0;
    flex: 0 0 40%;
    
    
    vertical-align: middle;
    display: flex;
`


export default ProgressBarContainer