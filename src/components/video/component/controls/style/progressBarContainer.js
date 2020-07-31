import styled from "styled-components"
import Box from "../../../../../elements/Box"

const ProgressBarContainer = styled(Box).attrs(props =>({
className: `progress-bar-container`
}))`
   
   
   padding: 0;
    flex: 1 1 auto;
    max-width: 40%;
    margin: auto 0;
    vertical-align: middle;
    display: inline;
`


export default ProgressBarContainer