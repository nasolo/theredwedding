import styled, { css } from 'styled-components';
import Box from '../../../elements/Box';


const justifyContentBreakpoint = ({theme}) => css`
    ${theme.mediaQueries.lg}{
        justify-content: center;
    }
`

const Wrapper = styled(Box).attrs(props =>({
className: 'terms-page-wrapper'
}))`

    width: 100%;
    height: 100%;
    overflow: hidden;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: flex-end;
    


    ${justifyContentBreakpoint}


    


`


export default Wrapper