import React from 'react'
import Box from '../../../elements/Box'
import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom'



const StyledHome = styled(Box).attrs(props=>({
    className: "home"
}))`

    

`


const Home = ({children, contents, path, ...rest}) => {

    const match = useRouteMatch({
        path: path,
        strict: true,
        sensitive: true
      });

    return (
        <StyledHome {...rest}>
            {contents}
        </StyledHome>
    )
}

export default Home