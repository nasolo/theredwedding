import styled, { css } from "styled-components"
import Box from "../../../elements/Box"

const shadowMediaQueries = ({theme}) => css`

    ${`${theme.mediaQueries.xl}`}{
        box-shadow: none;
        padding: 1rem 0;
        margin: 0px auto 3rem;
    }

`


const ContentWrapper = styled(Box).attrs(props =>({
    className: 'content-wrapper'
}))`

    position: relative;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: inset 0px -150px 100px -12px rgba(0,0,0,1);
    background-image: ${({ContentBackground}) => `url(${ContentBackground})`};
    

    

    ${shadowMediaQueries};

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 5rem;
        width: 100%;
        background: linear-gradient(180deg, rgba(184,0,0,1) 0%, rgba(0,0,0,0) 100%);
    }

    

`


export default ContentWrapper