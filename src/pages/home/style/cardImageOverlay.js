import Box from '../../../elements/Box'
import styled from 'styled-components'


const ImgOverlay = styled(Box)`
    min-height: 100%;
    min-width: 100%;
    box-shadow: inset 7px 0px 101px 61px rgba(0,0,0,0.8);
    ${props => props.src && {
        backgroundImage: `url(${props.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover"
        }
    }
    position: absolute;
    z-index: -1;
`


export default ImgOverlay