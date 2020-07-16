import styled from "styled-components";
import Box from '../Box'
import { motion } from "framer-motion";


const Frame = styled(Box).attrs({
    as: motion.div
})`

    width: ${({width}) => width || "100%"}

`


export default Frame