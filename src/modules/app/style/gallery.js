import React from 'react'
import Box from '../../../elements/Box'
import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom';


const StyledGallery = styled(Box).attrs(props=>({
    className: "gallery"
}))`

    overflow: hidden;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    position: relative;
    flex-direction: column;

`

const Gallery = ({children, contents, path, ...rest}) => {

    console.log(path)

    const match = useRouteMatch({
        path: path,
        strict: true,
        sensitive: true
      });


    return (
        

        <StyledGallery {...rest}>
            {contents}
        </StyledGallery>
    )
}

export default Gallery