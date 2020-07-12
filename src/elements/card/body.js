import styled from "styled-components";
import Box from "../Box";


const handleBodyClass = ({variants}) => {
    switch (variants) {
        case "img-overlay":
            return "card-img-overlay"
        default:
            return "card-body"
    }
}


const Body = styled(Box).attrs(props =>({
    className: handleBodyClass(props)
}))`

  
    display: flex;
    flex-direction: column;
    justify-content: center;

    &.card-body{
        padding: .5em 0 0 0;
    }

`


export default Body