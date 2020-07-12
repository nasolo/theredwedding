import Row from 'react-bootstrap/Row'
import Box from '../../../../../elements/Box'
import styled from 'styled-components'
import css from '@styled-system/css'



const listContainerBreakpoints = ({mediaQueries})=>css({
    [mediaQueries.sm]:{
        
    }
})


const ListContainer = styled(Box).attrs(props => ({
    className: "list-container container-fluid",
   
}))`

    
    width: 100%;
    max-height: 100%;
    display: grid;
    grid-template: repeat(3, minmax(30%, auto)) / repeat(3, minmax(30% ,auto));
    gap: 1rem 1rem;
    position: relative;

  
   
`

export default ListContainer