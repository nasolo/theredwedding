import styled from "styled-components";
import Icon from "../../../../../components/icon";



const LeftChevron = styled(Icon).attrs(props =>({
    className: "leftchevron"
}))`

    max-height: 3rem;
    max-width: 3rem;
    z-index: 200;
    fill: ${({theme}) => theme.colors.whites[7]};
    margin: auto auto auto 0;
    
    

`

export default LeftChevron


LeftChevron.defaultProps ={
    icon: "leftchevron"
}