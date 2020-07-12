import Box from "../../../elements/Box";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import css from '@styled-system/css'

const PageContainer = styled(Box).attrs(props =>({
    as: Container,
    className: "page-container",
    fluid: true
}))`

    max-width: 80%;
    
   
    
    
   
`


export default PageContainer

