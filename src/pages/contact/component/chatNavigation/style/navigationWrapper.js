import styled, { css }  from "styled-components"
import Box from "../../../../../elements/Box"

const positionMediaQueries = ({theme}) => css`

    ${`${theme.mediaQueries.lg}`}{
        left: 65%;
        font-size: .75rem;
        
    }

    ${`${theme.mediaQueries.md}`}{
        left: 70%;
        font-size: .75rem;
    }

`

const LinkWrapper = styled(Box).attrs(props =>({
    className: 'link-Wrapper'
}))`

    position: absolute;
    bottom:0;
    left: 27%;
    width:100%;
    max-width: 13.5rem;
    z-index: 1;
    color: white;
    font-size: .75rem;
    border-top-left-radius: .50rem;
    border-top-right-radius: .50rem;
    text-align: center;
    ${positionMediaQueries}
    
    
    span{
        font-weight: 700;
    }
   
    


`

export default LinkWrapper
