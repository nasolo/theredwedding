import styled from "styled-components"
import Box from "../Box"
import { motion } from "framer-motion"

const Text = styled(Box).attrs(props =>({
    as: props.variants ? motion.p : "p",
    className: "card-text",
    children: props.text
}))`

 margin: auto;
`


export default Text