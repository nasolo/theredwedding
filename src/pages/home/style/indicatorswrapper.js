import Container from 'react-bootstrap/Container'
import styled, { css } from 'styled-components'
import Box from '../../../elements/Box'

const indicatorMediaQueries = ({theme}) => css`

    ${theme.mediaQueries.lg}{
        justify-content: flex-end;
    }

`

const IndicatorsWrapper = styled(Box).attrs({
    className: 'container-fluid' 
})`

    bottom: 2em;
    display: flex;
    justify-content: center;
    position: absolute;
    padding-right: 20%;
    z-index: 100;
    
    ${indicatorMediaQueries};

`

export default IndicatorsWrapper