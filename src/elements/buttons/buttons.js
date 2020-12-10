import styled from "styled-components";
import Box from "../Box";



const Buttons = styled(Box).attrs(props =>({
    as: 'button',
    className: "btn"
}))`

    cursor: pointer;
    width: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(234,33,39,1) 98%);
    border: none;
    color: white;
    padding: 1rem;
    font-weight: 700;
    border-radius: .50rem;
    &:hover{
        color: white
    }

`


export default Buttons