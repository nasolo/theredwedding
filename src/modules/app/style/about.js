import styled from "styled-components"
import Box from "../../../elements/Box"



const About = styled(Box).attrs(props =>({
    className: "about",
    children: props.contents
}))`

    position: relative;
    background-color: black;
   

`

export default About