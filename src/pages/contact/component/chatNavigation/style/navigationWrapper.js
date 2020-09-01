import styled  from "styled-components"
import Box from "../../../../../elements/Box"


const LinkWrapper = styled(Box).attrs(props =>({
    className: 'link-Wrapper'
}))`

    
    height: 3rem;
    margin: 0 auto;
    color: white;
    font-size: .75rem;
    border-top-left-radius: .50rem;
    border-top-right-radius: .50rem;
    text-align: center;
    
    
    span{
        font-weight: 700;
    }
   
    


`

export default LinkWrapper

//