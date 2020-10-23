import styled from "styled-components"
import Box from '../../../elements/Box'


const PageContainer = styled(Box).attrs(props =>({
    className: 'blog-page-container'
}))`

    height: 100vh;
    overflow: hidden; 
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;


`


export default PageContainer