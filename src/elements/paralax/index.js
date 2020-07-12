import Box from "../Box";
import styled from "styled-components";

const Paralax = styled(Box).attrs({
    className: 'paralax'
})`

position: relative;
width: 100%;
height: 100%;
overflow: hidden;

`

export default Paralax