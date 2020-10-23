import styled from "styled-components"
import Box from "../../../elements/Box"
import css from '@styled-system/css'

const positionBreakpoint = ({theme}) => css({
        [theme.mediaQueries.lg]:{
            left: 0
        }
})



const DropdownWrapper = styled(Box).attrs(props =>({
    className: 'dropdown-wrapper'
}))`

    position: absolute;
    z-index: 1;
   
    background-color: transparent;
    min-width: 5rem;
    border-radius: .5rem; 


   &.calender {
        right: 0;
        ${positionBreakpoint}
    }
    .react-calendar__month-view__days__day{
        font-size: .75rem;
    }

    .react-calendar__tile{
        padding: .20rem;
    }

    .react-calendar{
      width: 100%;
      border-radius: .25rem;
    }

    .react-calendar__navigation{
        margin-bottom: 0;
        height: 1.25rem;
    }
    
`


export default DropdownWrapper

