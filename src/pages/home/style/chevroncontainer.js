import styled from "styled-components"
import Box from "../../../elements/Box"

const ChevronContainer = styled(Box).attrs({
    className: "chevron-container container-fluid"
})`

    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 2000;
    top: calc(50% - 6rem);
    margin: auto;
    max-width: 80%;
  
    

`

export default ChevronContainer