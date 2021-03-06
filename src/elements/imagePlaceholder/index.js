import lqip from "lqip.macro";
import styled, { css } from "styled-components";
import Box from "../Box";


const FullScreenImage = styled(Box).attrs(props => ({
    className: 'fullscreen-background'
}))`

    min-height: ${props => props.height ? props.height : "100vh"};
    min-width: ${props => props.width ? props.width : "100vw"};
    box-shadow: inset 7px 0px 101px 61px rgba(0,0,0,0.8);
    background-color: ${props => props.bg ? props.bg : "white"};
    background-image: ${props => props.src && `url(${props.src})` };
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    ${({shadow}) => shadow && 
    css`
        box-shadow: 0px -63px 62px 52px rgba(0,0,0,0.75) inset;
        &:before{
            content: " ";
            box-shadow: 0px 63px 62px 52px rgba(0,0,0,0.75) inset;
        }` 
    }
  

`


export default FullScreenImage