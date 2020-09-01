import styled from "styled-components"
import Box from "../../../elements/Box"

const ListItem = styled(Box).attrs(props =>({
    as: "li",
    className:"dd-list-item list-group-item"
}))`

    &:hover{
        cursor: pointer;
        background-color: gainsboro;
    }


`

export default ListItem