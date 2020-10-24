import styled from "styled-components"
import Box from "../../../elements/Box"

const PostDate = styled(Box).attrs(props =>({
    className: `card-subtitle ${props.as ? props.as : 'h3'}`,
    as: 'h3'
}))`

    margin-bottom: 1rem;

`

export default PostDate