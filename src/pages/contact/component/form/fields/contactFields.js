import React from 'react'
import Form from '../../../../../elements/forms'
import renderValidation from './validation'

const { Control, Group } = Form

const formCols = "col-6 col-lg-3 p-0 px-lg-3"

const handleValidation = ({touched, error}) => {

    return `${touched && error ? "is-invalid" : "needs-validation"} rounded-0`
}


const renderFormGroup = ({meta, input, validations, type, label, ...rest}) => {

    console.log(meta)

    return (
        <Group className={`${formCols}`}>
            <Control
                {...rest}
                className={`${handleValidation({...meta})}`} 
                required={validations.required}
                {...input}
                type={type}
                placeholder={label} 
            />
            {renderValidation(meta)}
        </Group>
    )
}



const contactFields = (fields) => {




    const { formFields } = fields

    const isFieldDefiend = formFields !== undefined && formFields instanceof Array

    return (
        <>  
            {isFieldDefiend && formFields.map(field => renderFormGroup({...field, ...fields[field.name]}))}
        </>
    )
}


export default contactFields



/*


/*

<>
            <Group className={`${formCols}`}>
                <Control 
                    className={`${handleValidation(firstName.meta)}`} 
                    required
                    {...firstName.input} 
                    type="text"
                    placeholder="First" 
                />

                {renderValidation(firstName.meta)}

            </Group>
            <Group className={`${formCols}`}>
                <Control
                required
                    className={`${handleValidation(lastName.meta)}`} 
                    {...lastName.input} 
                    type="text" 
                    placeholder="Last"
                />
                {renderValidation(lastName.meta)}
            </Group>
            <Group className={`${formCols}`}>
                <Control
                    required
                    className={`${handleValidation(emailAddress.meta)}`} 
                    {...email.input} 
                    type="text" 
                    placeholder="Email"
                />

                {renderValidation(email.meta)}
            </Group>
            <Group className={`${formCols}`}>
                <Control
                    required
                    className={`${handleValidation(phone.meta)}`} 
                    {...phone.input} 
                    type="text" 
                    placeholder="Phone"
                />

                {renderValidation(phone.meta)}

            </Group>

*/