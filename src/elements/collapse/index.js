import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Box from '../Box'

const Collapse = styled(Box).attrs(props =>({
    className: `${props.className} collapse navbar-collapse`,
    id: "navbarNav"
}))`

`


export default Collapse