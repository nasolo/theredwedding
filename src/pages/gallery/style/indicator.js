import styled from "styled-components";
import Box from "../../../elements/Box";



const IndicatorWidthBreakpoints = (totalIndicatorsPerPage) => ({
        maxWidth: {
                _:  `calc((100vw / ${totalIndicatorsPerPage ? totalIndicatorsPerPage : 6}) - 3%)`, 
                sm: `calc((100vw / ${totalIndicatorsPerPage ? totalIndicatorsPerPage : 6}) - 3%)`, 
                md: `calc((100vw / ${totalIndicatorsPerPage ? totalIndicatorsPerPage : 6}) - 3%)`, 
                lg: `calc((80vw / ${totalIndicatorsPerPage ? totalIndicatorsPerPage : 8}) - 1%)`
        }
})


const Indicator = styled(Box).attrs(props =>({
    as: 'button',
    className: `btn btn-Indicator ${props.active ? "active" : "inactive"}`,
   
}))`

   
    height: 100%;
    width: 100%;
    max-width: 12.5rem;
    background-color: ${({active, theme}) => active ? theme.colors.whites[10] : theme.colors.greys[9]};
    border-radius: 0;
    z-index: 1;
    margin: auto .5%;
    flex-flow: 1;
    flex-shrink: 10;
    &:focus{
        outline: none;
    }
    
    
`

const mediaQueries = {
    ...IndicatorWidthBreakpoints()
}

export default Indicator

Indicator.defaultProps = {
    ...mediaQueries
}