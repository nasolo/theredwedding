import styled from "styled-components"
import Box from "../Box"
import { motion } from "framer-motion"

const Subtitle = styled(Box).attrs(props =>({
    as: props.variants ? motion.h4 : "h4",
    className: "card-subtitle",
    children: props.text
}))``

export default Subtitle