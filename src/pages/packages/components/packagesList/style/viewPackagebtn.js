import Box from "../../../../../elements/Box"
import styled from "styled-components"


const ViewPackage = styled(Box).attrs(props =>({
    as: 'button',
    className: 'btn PackageLinkButton d-none d-lg-block',
    children: "VIEW PACKAGE"
}))`


    margin: auto;
    color: white;
    width: 80%;
    border: 1px dotted white;
    z-index: 100;
    background-color: ${({theme})=> theme.colors.blacks[1]};
    font-size: 1vw;
    align-self: flex-end;
    

`


export default ViewPackage