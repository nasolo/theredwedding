import styled, { css } from "styled-components"
import Box from "../../../elements/Box"

const shadowMediaQueries = ({theme}) => css`

    ${`${theme.mediaQueries.lg}`}{
        box-shadow: none;
        padding: 4rem 0;
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
    padding: 2rem 0 1rem;
    box-shadow: inset 0px -150px 100px -12px rgba(0,0,0,1);
    margin-bottom: 5rem;

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