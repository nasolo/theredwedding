import styled, { css } from "styled-components"
import Box from "../../../../../elements/Box"



const navLinkStyle = css`

    .nav-link{
        font-size: .65rem;
        padding: 0;
        color: ${({theme}) => theme.colors.whites[7]};
    }

`


const CopyrightWrapper = styled(Box).attrs({
    className: "col-6 copyright-wrapper"
})`

    display: flex;
    gap: .50rem;
    flex-wrap: nowrap;
    ${navLinkStyle}
    
    &&{
        color: ${({theme}) => theme.colors.whites[7]} !important;
        font-size: .65rem;
    }




`

export default CopyrightWrapper