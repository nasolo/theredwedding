import styled from "styled-components"
import Box from "../../../elements/Box"

const btnBackgroundImg = 'assets/brand/btngb.png'

const ButtonBackground = styled(Box).attrs(props =>({
    className: "Button-Background"
}))`

background-image: url(${btnBackgroundImg});
width:5rem;
height: 100%;
position: absolute;

background-repeat: no-repeat;


`


export default ButtonBackground