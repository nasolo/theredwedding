import styled from "styled-components"
import css from '@styled-system/css'
import Box from "../../../elements/Box"


const fontBreakpoints = ({theme}) => css({
    [theme.mediaQueries.lg]: {
        fontSize: "1rem"
    }
})

const ButtonLabel = styled(Box).attrs(props => ({
className: "button-label"
}))`

    font-size: .75rem;
    font-weight: 700;
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);

${fontBreakpoints}

`

export default ButtonLabel