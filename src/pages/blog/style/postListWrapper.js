import styled, { css } from "styled-components";
import Box from "../../../elements/Box";


const postMediaQueries = ({theme}) => css`

    ${theme.mediaQueries.lg}{
        height: 40vh;
    }


`

const PostListWrapper = styled(Box).attrs(props => ({
    className: 'post-list-wrapper'
}))`

    
    height: 60vh;
    overflow-y: scroll;
    overflow-x: hidden;

    ${postMediaQueries};


`

export default PostListWrapper
