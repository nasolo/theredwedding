

import Box from '../../../../../elements/Box';
import styled from 'styled-components';


const Notice = styled(Box).attrs(props =>({
    children: props.notice
}))``

export default Notice