import Box from "../../../elements/Box"
import styled from "styled-components"

const CarouselWrapper = styled(Box).attrs(props =>({
    className: 'carousel-wrapper'
}))`
    height: 100%;
    width: 100%;
    position: absolute;
   

`


export default CarouselWrapper