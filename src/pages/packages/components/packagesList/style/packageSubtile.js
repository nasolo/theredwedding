import Box from "../../../../../elements/Box"
import styled from "styled-components"


const PackageSubtile = styled(Box).attrs(props =>({
    as: 'p',
    className: 'package-subtile d-none d-lg-block',
    children: props.subtitle,

}))`

    margin: auto;
    max-width: 100%;
    
    z-index: 100;
    font-size: 1vw;
    

`

export default PackageSubtile