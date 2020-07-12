import Box from '../../../elements/Box'
import { calcRatio } from '../helper';
import styled, { css } from 'styled-components';

 const Wrapper = styled(Box).attrs(props =>({
    className: `img-wrapper`
}))`
    position: relative;
    width: 100%;
    height: 100%;
    user-select: none;
  
    ${({color, ratio}) => (
        css`
            background-color: ${color ? color : "transparent"};
            padding-bottom: ${`${calcRatio(ratio)}%`};
         `
    )}
`


export default Wrapper


Wrapper.defaultProps = {
    ratio: "1280x720"
}