import styled from "styled-components"
import Box from "../../../elements/Box"

const LinksWrapper = styled(Box).attrs(props=>({
    className: "links-wrapper container"
}))`

   
    
    display: flex;
    bottom: 0;
    padding-bottom: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    overflow: hidden;
    z-index: 100;
    flex-wrap: nowrap;
    align-self: flex-end;
    

`

export default LinksWrapper