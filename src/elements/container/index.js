import styled from "styled-components"
import Box from "../Box"
import css from '@styled-system/css'

const handleFluidBreakPoints = fluid =>{
    
    if(fluid === undefined){
        return 'container'
    }

    const bp = ["md", "sm", "lg", "xl"]
    return bp.includes(fluid) ? `container-${fluid}` : `container-fluid`
}


const mediaQueries = ({fluid, theme}) =>css({
    [theme.mediaQueries.lg]:{
        maxWidth: fluid ? "100%" : "80%"
    }
})

const Container = styled(Box).attrs(props =>({
    className: `${handleFluidBreakPoints(props.fluid)}`
}))`

   


`

export default Container


/* ${ props => mediaQueries(props)}*/