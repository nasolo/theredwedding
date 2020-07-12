import styled from "styled-components";
import Row from "react-bootstrap/Row";
import ComposeBoxHelper from "../../../utils/style/composeBox";
import { motion } from "framer-motion";


const FilterNavContainer = styled(Row).attrs(props =>({
    as: motion.div,
    className: `${props.className} filter-container row FilterNavContainer`

}))`

    ${ComposeBoxHelper}
   
    
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    
    
    
`
export default FilterNavContainer