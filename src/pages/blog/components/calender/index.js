import React from 'react'

import Wrapper from './style/calenderWrapper'
import ResetButton from './style/resetButton'
import ResetWrapper from './style/resetDatesWrapper'
import ResetText from './style/resetText'
import Icon from '../../../../components/icon'
import ReactCalender from './style/reactCalender'
const ResetDates = ({reset}) => {
    return (
        <ResetWrapper>
            <ResetButton onClick={()=>reset(null)}>
                <Icon 
                    icon="refresh" 
                    fill="white" 
                    height="1rem"
                />
                <ResetText text="Reset dates"/>
            </ResetButton>
        </ResetWrapper>
    )
}

const DateSelector = ({onDateChange, selectedDates, ...rest},) => {
    return (
    
        <Wrapper>
            <ReactCalender 
                onChange={onDateChange}
                value={selectedDates}
                selectRange={true}
            />
                <ResetDates reset={onDateChange}/>
        </Wrapper>
    )
}


export default DateSelector