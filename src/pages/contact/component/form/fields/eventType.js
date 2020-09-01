import React from 'react'

import Form from '../../../../../elements/forms'
import Dropdown from '../../../../../components/dropdown'


const {Group} = Form

const eventType =["Wedding", "proposal", "Engagement Party", "Awards Ceremony", "Vow Renewal"]

const eventTypeSelectField = ({
    input,
    label
}) =>{
return (
    <Group
        
        position="absolute"
        zIndex="1"
        width="105%"
    >
        <Dropdown.menu {...input} list={eventType} header={label}/>
    </Group>
)
}


export default eventTypeSelectField