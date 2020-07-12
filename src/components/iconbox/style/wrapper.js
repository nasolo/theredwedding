import Span from '../../../elements/span'
import styled from 'styled-components'
import ComposeBoxHelper from '../../../utils/style/composeBox'


const Wrapper = styled(Span).attrs({
    className: "icon-box-wrapper"
})`
    ${ComposeBoxHelper}
    
    display: flex;
    align-content: center;
    justify-content: center;
    flex-flow: ${({flexFlow}) => flexFlow ? flexFlow : "row nowrap"};
    flex-basis: ${({flexBasis}) => flexBasis ? flexBasis : "3rem"};
    flex-grow: 1;

`

export default Wrapper