import styled from "styled-components"
import Box from "../../../../../elements/Box"
import { motion } from "framer-motion"


const Description = styled(Box).attrs(props =>({
    as: motion.p,
    className: "package-decription",
    children: props.text
}))`


color: white;
font-size: 1rem;
height: 100%;

`

export default Description