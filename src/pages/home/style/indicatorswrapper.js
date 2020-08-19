import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import Box from '../../../elements/Box'

const IndicatorsWrapper = styled(Box).attrs({
    className: 'container-fluid' 
})`

    bottom: 2em;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    padding-right: 20%;
    z-index: 100;
    

`

export default IndicatorsWrapper