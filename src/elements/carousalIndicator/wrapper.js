import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import ComposeBoxHelper from '../../utils/style/composeBox'

const IndicatorsWrapper = styled(Container)`
    ${ComposeBoxHelper}
    display: flex;
    justify-content: end;
    gap: 1rem;
`

export default IndicatorsWrapper