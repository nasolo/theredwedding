import styled, { css } from "styled-components"
import Box from "../../../../../elements/Box"


const callenderWrapperMediaQueries = ({theme}) => css`

    ${theme.mediaQueries.lg}{
        margin-bottom: 0;
    }

`

const Wrapper = styled(Box).attrs(props => ({
    className: "calender-wrapper"
}))`

    height: 100%;
    width: 100%;
    margin-bottom: 1rem;
    

`

export default Wrapper