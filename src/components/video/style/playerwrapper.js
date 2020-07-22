import styled, { css } from "styled-components";
import Box from "../../../elements/Box";

 const PlayerWrapper = styled(Box).attrs(props =>({
    className: "player-wrapper w-100 h-100"
 }))`


    position: absolute;
    top: 0;
    left: 0;
    &:hover{
       cursor: pointer;
    }



.react-player__shadow{
      display: ${({light}) => light ? "none" : "inline"};
      background-color: ${({theme}) => theme.colors.blacks[7] || "rgba(0, 0, 0, 0.3)"} !important;
      height: 100% !important;
      width: 100% !important;
      max-height: 12rem !important;
      max-width: 12rem !important;
      border-radius: 100% !important;
}


   

 `

 export default PlayerWrapper

 