import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Box from "../../../../../elements/Box";
import css from '@styled-system/css'


const mediaQueries = ({theme}) => css({
    [theme.mediaQueries.lg]:{
        maxWidth: "80%"
    }
})


const FooterContainer = styled(Box).attrs(props =>({
    as: Container,
    className: "package-details-footer"
}))`

    max-width: 100%;
    margin-bottom: 2rem;
    ${mediaQueries}

`

export default FooterContainer


FooterContainer.defaultProps ={
    fluid: true
}
