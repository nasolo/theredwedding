import styled from "styled-components"
import Box from "../../../elements/Box"

const PostBody = styled(Box).attrs(props => ({
    className: `card-body post-body`
}))`

    padding: 0 2rem .50rem 1rem;

`

export default PostBody