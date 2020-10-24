import styled from "styled-components";
import Box from "../../../../../elements/Box";

const ResetButton = styled(Box).attrs(props => ({
    className: 'reset-button btn btn-link',
    as: "button"
}))`

    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0px


`

export default ResetButton