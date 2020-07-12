import styled from "styled-components";
import { motion } from "framer-motion";



const PopoverBox = styled(motion.div)`
  transition: color 0.15s, background-color 0.15s, width 0.25s ease-in-out;
  position: absolute;
  padding: 50px;
  list-style: none;
  background-clip: padding-box;
  border-radius: 0;
  box-shadow: 0 1px 15px rgba(27, 31, 35, 0.15);
  margin: 0;
  background-color: black;
  color: white;
  border: 1px solid rgba(27, 31, 35, 0.15);
  font-size: 12;
  z-index: 2000;
  
`;


export default PopoverBox