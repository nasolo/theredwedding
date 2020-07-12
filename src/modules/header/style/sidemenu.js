import styled from "styled-components"
import Box from "../../../elements/Box"

const SideMenu = styled(Box).attrs(props => ({
    className: `side-menu ${props.active ? "active" : "inactive"}`
}))`

width: 80%;
position: fixed;
right: -1px;
top: 0;
background: ${({theme}) => theme.colors.gainsboro || "grey"};
z-index: 2000;
height: 100%;
overflow: hidden;


`


export default SideMenu