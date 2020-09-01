import React from 'react'
import Dropdown from '../../../../../components/dropdown'


const calender = ({
    input,
    label,
    className
}) => (
    <Dropdown.calender { ...input } className={className} title={label}/>
)

export default calender