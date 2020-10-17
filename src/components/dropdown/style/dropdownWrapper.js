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
    width: 100%;
    background-color: transparent;
    min-width: 5rem;
    border-radius: .5rem; 


   &.calender {
        left: calc(-50vw + 1.73rem);
        ${positionBreakpoint}
    }
    .react-calendar__month-view__days__day{
        font-size: .75rem;
    }

    .react-calendar__tile{
        padding: 0;
    }

    .react-calendar{
       width: 240px;
    }

    .react-calendar__navigation{
        margin-bottom: 0;
        height: 1.25rem;
    }
    
`


export default DropdownWrapper

