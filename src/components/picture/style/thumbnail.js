import styled, { css } from 'styled-components';
import Box from '../../../elements/Box';


const Thumbnail = styled(Box).attrs(props =>({
    className: `thumbnail`,
    as: 'img'
}))`

    position: absolute;
    width: 100%;
    height: 100%;
    max-height: 798px;
    object-fit: contain;
    display: block;
    transition: opacity 1s linear;
    ${({blur, loaded}) => (
        css`
            filter: ${`blur(${blur}px)`};
            opacity: ${loaded ? 1 : 0}
        `
    )}
    
`


export default Thumbnail