import Box from "../../../../../elements/Box"

import css from '@styled-system/css'
import styled from "styled-components"


const mediaQueries = ({mediaQueries}) => css({
    [mediaQueries.xl]: {
        fontSize: "2vw"
    },
    [mediaQueries.lg]: {
        fontSize: "1.5em"
    }
})

const PackageName = styled(Box).attrs(props =>({
    className: 'h2 packageName',
    children: props.name
}))`

    margin: auto;
    font-weight: 700;
    z-index: 100;
    font-size: 3vw;
    ${({theme})=> mediaQueries(theme)}


`

export default PackageName