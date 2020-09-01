import styled from "styled-components"
import Box from "../../../elements/Box"

const List = styled(Box).attrs(props =>({
    as: "ul",
    className:"dd-list list-group"
}))``

export default List