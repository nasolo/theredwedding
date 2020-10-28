import React from 'react'

import Calender from 'react-calendar'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import styled, { css } from 'styled-components'


const StyledCalender = ({className, ...rest}) => {
return (
    <>
        <Calender {...rest} className={['d-none', 'd-lg-block',className]} /> 
        <DateRangePicker {...rest} className={['d-lg-none', className]}/>
    </>
)

}

const calenderMediaQueries = ({theme}) => css`

    ${theme.mediaQueries.lg}{
        .react-calendar__tile{
            padding: 0.75em 0.5em
        }

        .react-calendar__navigation{
            margin-bottom: 1em;
        }
    }

`

const ReactCalender = styled(StyledCalender).attrs(props => ({
    className: "styled-react-calender"
}))`

   
    
    .react-calendar__tile{
            padding: 0.25em .25em;
        }
    .react-calendar__navigation{
        margin-bottom: 0;
    }

    .react-daterange-picker__wrapper{
        background: white;
        
        transform: translateX(calc(100vw / 2 - 9.5rem))
    }


    ${calenderMediaQueries}

`

export default ReactCalender