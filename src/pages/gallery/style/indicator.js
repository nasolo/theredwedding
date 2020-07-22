import styled from "styled-components";
import Box from "../../../elements/Box";
import css from '@styled-system/css'



const mediaQueries = ({ mediaQueries }, totalIndicatorsPerPage) => css({ 
    [mediaQueries.lg]: {
        maxWidth: `calc((80vw / ${totalIndicatorsPerPage ? totalIndicatorsPerPage : 8}) - 1%)`
    }
})

const Indicator = styled(Box).attrs(props =>({
    as: 'button',
    className: `btn btn-Indicator ${props.active ? "active" : "inactive"}`,
   
}))`

        max-width: ${({totalIndicatorsPerPage}) => `calc((100vw / ${totalIndicatorsPerPage ? totalIndicatorsPerPage : 6}) - 6%)`};
        margin: 0 .30em;
        height: 100%;
        width: 100%;
        background-color: ${({active, theme}) => active ? theme.colors.whites[10] : theme.colors.greys[9]};
        border-radius: 0;
        z-index: 1;
        flex-flow: 1;
        flex-shrink: 10;
        &:focus{
            outline: none;
        }
    ${({totalIndicatorsPerPage, theme}) => mediaQueries(theme, totalIndicatorsPerPage)} 
`

export default Indicator

