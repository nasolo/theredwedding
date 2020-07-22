import styled from "styled-components"
import css from '@styled-system/css'
import ComposeBoxHelper from "../../../utils/style/composeBox"
import Container from "react-bootstrap/Container"
import handleMediaQueries from "../../../utils/handleMediaQueries"
import Box from "../../../elements/Box"

const mediaQueries = ({theme})=>css({
    [theme.mediaQueries.lg]: {
        position: "unset",
        textAlign: "left",
        width: "100%",
        margin: "0 auto 2.5rem auto",
        maxWidth: "80vw",
    }
})

const ShareIconsWrapper = styled(Box).attrs({
    className: "ShareIconsWrapper container-fluid"
    
})`
    height: 1em;
    width: 100%;
    position: absolute;
    top: 20%;
    text-align: right;
    margin: auto;
    z-index: 1;
    ${mediaQueries}

`

ShareIconsWrapper.defaultProps ={
    
}

export default ShareIconsWrapper