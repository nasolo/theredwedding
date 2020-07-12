import styled from "styled-components";
import Box from "../../../elements/Box";
import { motion } from "framer-motion";
import { flexbox } from "styled-system";


export const AccordianHeader = styled(Box).attrs(props=>({
    as: motion.header
}))``

export const AccordianBody = styled(Box).attrs(props =>({
    as: motion.section
}))``


export const AccordianWrapper = styled(Box)`
${flexbox}
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  

`