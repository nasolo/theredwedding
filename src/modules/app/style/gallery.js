import Box from '../../../elements/Box'
import styled from 'styled-components'


const Gallery = styled(Box).attrs(props=>({
    className: "gallery",
    children: props.contents
}))`

    overflow: hidden;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    position: relative;
    flex-direction: column;

`


export default Gallery