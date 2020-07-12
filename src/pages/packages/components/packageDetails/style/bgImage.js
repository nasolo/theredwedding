import FullScreenImage from "../../../../../elements/imagePlaceholder";
import styled from "styled-components";

const BgImage = styled(FullScreenImage).attrs(props =>({
    className: "bgImage"
}))`

    position: absolute;
    top: 0;
    left: 0; 
    box-shadow: 0px -63px 62px 52px rgba(0,0,0,0.75) inset;
    &:before{
        content: " ";
        box-shadow: 0px 63px 62px 52px rgba(0,0,0,0.75) inset;
    }
    
   
   
    
`


export default BgImage