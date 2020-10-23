import styled from "styled-components";
import Box from "../../../elements/Box";

const PostListWrapper = styled(Box).attrs(props => ({
    className: 'post-list-wrapper'
}))`

    height: 50vh;
    overflow-y: scroll;
    overflow-x: hidden;
    


`

export default PostListWrapper
