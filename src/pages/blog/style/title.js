import styled from "styled-components"
import Box from "../../../elements/Box"

const PostTile = styled(Box).attrs(props =>({
    className: `card-title display-6 ${props.as ? props.as : 'h1'}`,
    as: 'h1'
}))`

    font-weight: 900;

`

export default PostTile