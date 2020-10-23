import styled from 'styled-components'

import Box from '../Box'


const handleGrid = props => {
    
    const defaultPrefix = "row"
    const gridOptionsToAdd = []
    const gridOptions =  ["cols", "sm", "md", "lg", "xl"]

    const sanitize = val =>{
        if(val instanceof String){
            const parse = parseInt(val)
            return sanitize(parse)
        } else {
            return !isNaN(val) & val <= 12 ? val : 6
        }
    }

    Object.keys(props).forEach(key =>{
        if(gridOptions.includes(key)) {
            let column = sanitize(props[key])
            let mediaGridOption = `${defaultPrefix}-${key}-${column}`
            return gridOptionsToAdd.push(mediaGridOption)

        }
    })

    return `${defaultPrefix} ${gridOptionsToAdd.join(" ")}`
    


}

const GridCards = styled(Box).attrs(props => ({
    className: `${handleGrid(props)}`
}))`

    height: 200%;

`


export default GridCards