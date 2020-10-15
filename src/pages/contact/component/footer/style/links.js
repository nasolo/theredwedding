import styled, { css } from "styled-components"
import Box from "../../../../../elements/Box"



const navLinkStyle = css`

    .nav-link{
        font-size: .65rem;
        padding: 0;
    }

`


const CopyrightWrapper = styled(Box).attrs({
    className: "col-6 copyright-wrapper"
})`

    display: flex;
    margin: 0 auto;
    gap: .50rem;
    flex-wrap: nowrap;
    font-size: .65rem;
    ${navLinkStyle}
    



`

export default CopyrightWrapper