import styled from "styled-components"
import Box from "../../../elements/Box"

const Article = styled(Box).attrs(props => ({
    className: "card post",
    as: 'article'
}))`

    background-color: transparent;
    color: white;
    border: none;
    margin-bottom: 1.5rem;
    width: 100%;

`

export default Article