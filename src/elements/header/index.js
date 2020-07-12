import styled from "styled-components"
import Box from "../Box"


const Header = styled(Box).attrs(props =>({
    as: 'header',
    className: 'header'
}))`

    width: 100%;
    z-index: 99;

`


export default Header