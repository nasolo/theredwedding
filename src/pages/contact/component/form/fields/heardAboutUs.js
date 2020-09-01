import React from 'react'
import Form from '../../../../../elements/forms'
import Dropdown from '../../../../../components/dropdown'


const {Group} = Form
const headerAboutUsOptions = [ 'Word of Mouth', 'Magazine', 'Newspaper', 'Radio','Internet']

const selectFieldAboutUs = ({
    input,
    label,
    className
}) =>{

   
return (
    <Group>
        <Dropdown.menu {...input} list={headerAboutUsOptions} header={label} className={className}/>
    </Group>
)
}


export default selectFieldAboutUs