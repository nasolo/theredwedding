import Icon from '../../../components/icon'
import styled from 'styled-components'



const Chevron = styled(Icon)`

    cursor: pointer;
    position: absolute;
    top: calc(50% - 20px);
    background-color: transparent;
    border: none;
    user-select: none;
    z-index: 2;
    max-height: 4em;
    fill: gainsboro;

    &.leftchevron{
        left: 5%;
    }
    &.rightchevron{
        right: 5%;
    }
    
`


export default Chevron

