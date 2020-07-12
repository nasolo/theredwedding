import styled from "styled-components"
import Icon from "../../../../../components/icon"


const CloseBtn = styled(Icon).attrs(props =>({
    className: "closeIcon"
}))`

    z-index: 200;
    position: relative;
    max-height: 3rem;
    max-width: 3rem;
    cursor: pointer;
    position: absolute;
    top: 10%;
    right: 12%;
`



export default CloseBtn

CloseBtn.defaultProps ={
    icon: "wrong"
}