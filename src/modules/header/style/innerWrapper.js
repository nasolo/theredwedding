import styled from "styled-components"
import Box from "../../../elements/Box"

const InnerWrapper = styled(Box).attrs(props =>({
    className: `inner-wrapper`
}))`

    height: ${({height}) => height || "100%"};
    position: relative;
    overflow-y: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: ${({padding}) => padding || "1rem 1rem 0 1rem"};
    flex-direction: column;

`

export default InnerWrapper