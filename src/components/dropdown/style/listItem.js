import styled, { css } from "styled-components"
import Box from "../../../elements/Box"


const fontBreakpoints = ({theme}) => css`

    ${`${theme.mediaQueries.lg}`}{
        font-size: 1rem;
        padding: .75rem 1.25rem;
    }

`

const ListItem = styled(Box).attrs(props =>({
    as: "li",
    className:"dd-list-item list-group-item"
}))`

    font-size: .75rem;
    padding: .50rem 1.25rem;

    ${fontBreakpoints};

    &:hover{
        cursor: pointer;
        background-color: gainsboro;
    }


`

export default ListItem