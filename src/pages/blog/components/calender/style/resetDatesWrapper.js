import styled, { css } from "styled-components"
import Box from "../../../../../elements/Box"


const resetMediaQueries = ({theme}) => css`

    ${theme.mediaQueries.lg}{
        display: block;
    }

`

const ResetWrapper = styled(Box).attrs(props => ({
    className: 'reset-buttun-wraper'
}))`

   margin: 1rem 0;
   display: none;

   ${resetMediaQueries};
   
    

`

export default ResetWrapper