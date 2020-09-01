import styled from 'styled-components'
import Box from '../Box'



const Flexbox = styled(Box).attrs({
    className: 'd-flex'
})`
    
    margin: auto;
    flex-wrap: nowrap;
    flex: 1 1 auto;

    ${props => ({
        gap: props.gap
    })}


`

export default Flexbox

