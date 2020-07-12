import styled, { css } from "styled-components"
import Box from '../Box'



const mediaQueries = ({theme}) =>css({
    [theme.mediaQueries.lg]:{
        fontSize: "2rem",
        width: "100%",
    },

})


const textColor = ({color, theme}) => ({
    color: color ? color : theme.colors.whites[0]
})

const Heading = styled(Box).attrs(props => ({
    className: `heading ${props.as}`,
    children: props.text,
}))`

    ${textColor}
    text-align: center;
    width: 100%;
    margin: 1rem auto;
    font-weight: 900;
    ${mediaQueries}
`


export default Heading