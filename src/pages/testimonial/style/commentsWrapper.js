import styled from "styled-components"
import Box from "../../../elements/Box"

const CommentsWrapper = styled(Box).attrs(props =>({
className: 'commentsWrapper container'
}))`

    
    height: 100%;
    display: flex;
    margin: auto;
    justify-content: center;
    
    .paralax {
        height: 50%;
    }


`

export default CommentsWrapper