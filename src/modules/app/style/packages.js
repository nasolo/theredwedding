import React from 'react'
import Box from '../../../elements/Box'
import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom'



const StyledPackages = styled(Box).attrs(props=>({
    className: "packages"
}))`

    background-color: ${({theme}) => theme.colors.blacks[0]};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem auto;
    height: 100%;
    z-index: 1;
    
`


const Packages = ({children, path, contents, ...rest}) =>{

    const match = useRouteMatch({
        path: path,
        strict: true,
        sensitive: true
      });

    return(
        <StyledPackages {...rest}>
            {contents}
        </StyledPackages>
    )

}



export default Packages