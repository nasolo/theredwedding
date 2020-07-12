import Box from '../../../elements/Box'
import styled from 'styled-components'


const Home = styled(Box).attrs(props=>({
    className: "home",
    children: props.contents
}))`

    

`


export default Home