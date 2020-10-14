import React from 'react'
import Form from '../../../../../elements/forms'
import renderValidation from './validation'


const {Control, Group} = Form

const messageFields = ({
    input,
    label,
    type,
    meta
}) => {

    const { touched, error, warning } = meta

    console.log(touched, error)
return(
    <Group>
        
        <Control
            className={`${touched && error ? "is-invalid" : "needs-validation"} rounded`}
            required
            as='textarea' 
            {...input}
            placeholder={label} 
            type={type}  
            cols="1000"
            height="15vh" 
           
        />
           
    </Group>

)
}


export default messageFields