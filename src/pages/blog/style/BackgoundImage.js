import styled from "styled-components"
import Box from "../../../elements/Box"

const BackgoundImage = styled(Box).attrs(props => ({
    className: 'blog-background-image'
}))`


    height: 100%;
    width: 100%;
    background-image: ${({src}) => `url(${src})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: inset 0px -500px 100px -12px rgba(0,0,0,1);
    position: absolute;

    
    

`

export default BackgoundImage