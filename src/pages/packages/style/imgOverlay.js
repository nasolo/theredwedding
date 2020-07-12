import Box from '../../../elements/Box'
import styled from 'styled-components'


const CardOverlay = styled(Box).attrs(props =>({
    className: 'card-img-overlay'
}))`
    
    height: 100%;
    width: 100%;
    ${props => props.src && {
        backgroundImage: `url(${props.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover"
        }
    }
    position: absolute;
    z-index: 1;
    
`


export default CardOverlay