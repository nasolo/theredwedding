import styled from "styled-components";
import Box from "../Box";

const Img = styled(Box).attrs(props =>({
    className: `Img-loaded`,
    as: props.as ? props.as : 'img' 
}))`

    
    width: 100%;
    max-height: 70vh;
    user-select: none;
    object-fit: contain;



`

export default Img