import styled from "styled-components";
import Icon from "../../../../../components/icon";



const RightChevron = styled(Icon).attrs(props =>({
    className: "leftchevron"
}))`
    max-height: 3rem;
    max-width: 3rem;
    z-index: 200;
    fill: ${({theme}) => theme.colors.whites[7]};;
    margin: auto 0 auto auto;
    

`

export default RightChevron


RightChevron.defaultProps ={
    icon: "rightchevron"
}