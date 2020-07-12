import styled from "styled-components"
import Box from "../../../elements/Box"



const Testimonies = styled(Box).attrs(props =>({
    className: "tesimonials",
    children: props.contents
}))`

    position: relative;
    background-color: black;
   

`

export default Testimonies