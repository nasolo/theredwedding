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


const mediaQueries = ({theme}) =>css({
    [theme.mediaQueries.lg]:{
        maxWidth: "80%"
    }
})

const Container = styled(Box).attrs(props =>({
    className: `${handleFluidBreakPoints(props.fluid)}`
}))`

    ${mediaQueries}

`

export default Container