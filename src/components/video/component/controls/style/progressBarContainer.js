import styled, { css } from "styled-components"
import Box from "../../../../../elements/Box"



const ProgressBarMediaQueries = ({theme}) => css`

${theme.mediaQueries.lg}{
    flex: 1 1 75%;
}

`

const ProgressBarContainer = styled(Box).attrs(props =>({
className: `progress-bar-container`
}))`
   
   
    padding: 0;
    flex: 1 1 ;
    
    
    vertical-align: middle;
    display: flex;
    ${ProgressBarMediaQueries};
`


export default ProgressBarContainer