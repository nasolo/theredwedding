import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import Box from '../../../../../elements/Box'

const FooterRight = styled(Box).attrs(props => ({
    as: Col,
    lg: 8,
    sm: 12,
    className: "footer-right d-none d-lg-block"
}))`

   
    background-color: black;


`


export default FooterRight