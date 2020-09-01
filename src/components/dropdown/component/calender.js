import React, { useEffect } from 'react'
import Wrapper from '../style/wrapper'
import Calendar from 'react-calendar';
import Icon from '../../icon';

import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import ButtonWrapper from '../style/buttonWrapper';

import DropdownWrapper from '../style/dropdownWrapper';
import ButtonLabel from '../style/buttonLabel';

const defaultTitle = "Start date"
const dateOptions = {month: "short", day: 'numeric'}


const DropdownCalender = ({title, onChange, className, ...rest}) => {

    const [value, changeDate] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => setIsOpen(!isOpen)

    const label = title || defaultTitle
    const date = value !== null && new Date(value).toLocaleDateString('en-US', dateOptions)
    
    const formatDate = (locale, date) => date.toLocaleDateString('en-US', dateOptions)

    useEffect(() => {

        if(isOpen) handleToggle()
        if(onChange) return onChange(value)
    }, [value])

    return (
        <Wrapper>
            <ButtonWrapper className={`alert bg-sm-white calender ${className}`}>
                <ButtonLabel onClick={handleToggle}>
                <Icon icon="calender" height=".75rem" width=".75rem"  margin="auto .5rem"/>
                    {date || label}
                </ButtonLabel>
            </ButtonWrapper>
            <DropdownWrapper className="calender">
            {isOpen && 
                <Calendar
                    value={value}
                    onClickDay={changeDate}
                    formatMonthYear={formatDate}
                />
            }
        </DropdownWrapper>

        </Wrapper>
    )
}

export default DropdownCalender