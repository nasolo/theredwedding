import styled, { css }  from "styled-components"
import Box from "../../../../../elements/Box"

const positionMediaQueries = ({theme}) => css`

    ${`${theme.mediaQueries.lg}`}{
        
        top:0px;
        left: 65%;
        max-width: 20rem;
        height: 5rem;
        font-size: .75rem;
    }

`

const LinkWrapper = styled(Box).attrs(props =>({
    className: 'link-Wrapper'
}))`

    position: absolute;
    top:0px;
    left: 29%;
    height: 5rem;
   
    margin: auto;
    max-width: 50%;
    width: 100%;
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
