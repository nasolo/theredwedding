import React from 'react'

import Calender from 'react-calendar'
import styled, { css } from 'styled-components'

const StyledCalender = ({className, ...rest}) => <Calender {...rest} className={className}/>

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

    width: 100%;
    
    .react-calendar__tile{
            padding: 0.25em .25em;
        }
    .react-calendar__navigation{
        margin-bottom: 0;
    }
    ${calenderMediaQueries}

`

export default ReactCalender