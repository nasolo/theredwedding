import styled from 'styled-components';
import Box from '../../../elements/Box';


 const Image = styled(Box).attrs(props =>({
    className: `Img-loaded`,
    as: props.as ? props.as : 'img' 
}))`

    position: absolute;
    width: 100%;
    display: block;
    transition: opacity 1s linear;
    max-height: 798px;
    object-fit: contain;
    user-select: none;

`
export default Image