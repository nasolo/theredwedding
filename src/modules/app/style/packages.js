import Box from '../../../elements/Box'
import styled from 'styled-components'
import { display } from 'styled-system'


const Packages = styled(Box).attrs(props=>({
    className: "packages",
    children: props.contents
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


export default Packages