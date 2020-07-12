
import styled from "styled-components"
import Box from "../../../elements/Box"

const CloseBtnWrapper = styled(Box).attrs({
    clssName: `btn-close`
})`

    border-radius: 50%;
    display: inline-block;
    text-align: center;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;

`


export default CloseBtnWrapper