import Box from "../../../elements/Box";
import styled from "styled-components";
import { motion } from "framer-motion";


const FooterHeading = styled(Box).attrs({
  as: motion.div,
  className: "foot-heading row d-lg-none"
})`

  color: black;
  font-weight: 600;
  

& svg{
    fill: grey;
}

`


export default FooterHeading