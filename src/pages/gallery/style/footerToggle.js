import Box from "../../../elements/Box";
import styled from "styled-components";
import { motion } from "framer-motion";



const ToggleFooter = styled(Box).attrs(props => ({
    className: 'btn toggle-footer-btn',
    as: motion.button
}))`

    width: 100%;
    height: 100%;
    max-height: 3rem;
    border: none;
    border-radius: 0;
    background-clip: transparent;

`

export default ToggleFooter