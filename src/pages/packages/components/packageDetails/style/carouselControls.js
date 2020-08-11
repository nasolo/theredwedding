import Box from "../../../../../elements/Box"
import styled from "styled-components"


const CarouselControls = styled(Box).attrs(props =>({
    className: "carousel-controls container-fluid d-lg-flex"
}))`

    display: none;
    justify-content: space-between;
    max-width: 80%;
    margin: 10rem auto;

`


export default CarouselControls