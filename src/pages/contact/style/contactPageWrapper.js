import styled, { css } from 'styled-components';
import Box from '../../../elements/Box';


const justifyContentBreakpoint = ({theme}) => css`
    ${theme.mediaQueries.lg}{
        justify-content: center;
    }
`

const PageWrapper = styled(Box).attrs(props =>({
className: 'contact-page-wrapper'
}))`

    width: 100%;
    height: 100%;
    overflow: hidden;
    max-height: 100vh;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position: relative;
    


    ${justifyContentBreakpoint}


    


`


export default PageWrapper