import styled from "styled-components"
import Box from "../../../elements/Box"
import css from '@styled-system/css'

const wrapperMediaQueries =({theme})=>css({
    [theme.mediaQueries.lg]: {
        border: "1px solid white",
        borderRadius: ".50rem",
        background: "linear-gradient(to bottom, #a90329 0%,#8f0222 44%,#6d0019 100%)"
    }
})


const navLinkMediaQueries = ({theme}) => css({
    [theme.mediaQueries.sm]:{
        fontSize: "1rem"
    }
})



const Wrapper = styled(Box).attrs(props =>({
    className: "btn-wrapper"
}))`

    ${wrapperMediaQueries}
    flex: 1 1 auto;
    max-width: 20rem;
    
    .nav-link{
        
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: center;
        font-size: .70rem;
        ${navLinkMediaQueries}


        
    }

   .nav-link:nth-child(1){
      
        border-right: 1px dotted white;
    }
`


export default Wrapper