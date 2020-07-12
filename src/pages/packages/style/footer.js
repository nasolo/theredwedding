import styled from "styled-components"
import Box from '../../../elements/Box'
import css from '@styled-system/css'


const mediaQueries = ({theme}) =>css({
    [theme.mediaQueries.lg]:{
        fontSize: "2rem",
        width: "70%",
    }
})


const Footer = styled(Box).attrs(props => ({
    className: "page-heading",
    children: props.text
}))`

    color: ${({theme}) => theme.colors.whites[0]};
    text-align: center;
    width: 60%;
    margin: 1rem auto;
    font-size: 1rem;
    font-weight: 900;
    ${mediaQueries}

`


export default Footer