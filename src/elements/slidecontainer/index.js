import Box from "../Box";
import styled from "styled-components";



const SlideContainer = styled(Box).attrs({
    className: "slide-container"
})`

position: relative;
width: 100%;
height: 100%;
overflow: hidden;
max-height: 100vh;
background-color: black;


`

export default SlideContainer