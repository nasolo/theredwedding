import React from 'react'
import Form from '../../../../../elements/forms'
import renderValidation from './validation'

const style={
    className: "col-lg-3 col-6",
    padding: ".5rem 0",
    backgroundColor: "white",
    borderTop: "1.5px dotted grey",
    borderBottom: "1.5px dotted grey",
    borderRight: "1.5px dotted grey",
    
}

const controlBorderStyle={
   border: "none"
}

const borderRadiiLeft = {
    borderTopLeftRadius: ".5rem",
    borderTopLeftRadius: ".5rem",
    borderBottomRLeftRadius: ".5rem",
    borderBottomLeftRadius: ".5rem"
}

const borderRadiiRight = {
    borderTopRightRadius: ".5rem",
    borderTopRightRadius: ".5rem",
    borderBottomRRightRadius: ".5rem",
    borderBottomRightRadius: ".5rem"
}

const { Control, Group } = Form


const contactFields = (fields) => {
    const {firstName, lastName, email, phone } = fields

    console.log(firstName)
    
    return (
        <>
            <Group {...style} {...borderRadiiLeft} borderLeft="1.5px dotted grey">
                <Control 
                    className={`${firstName.meta.touched && firstName.meta.error ? "is-invalid" : "needs-validation"} `} 
                    required
                    {...firstName.input} 
                    {...controlBorderStyle}  
                    {...borderRadiiLeft}
                    type="text" 
                    placeholder="First Name" 
                />

                {renderValidation(firstName.meta)}

            </Group>
            <Group {...style}>
                <Control
                required
                    className={`${lastName.meta.touched && lastName.meta.error ? "is-invalid" : "needs-validation"} `} 
                    {...lastName.input} 
                    {...controlBorderStyle} 
                    type="text" 
                    placeholder="Last Name"
                />
                {renderValidation(lastName.meta)}
            </Group>
            <Group {...style}>
                <Control
                    required
                    className={`${email.meta.touched && email.meta.error ? "is-invalid" : "needs-validation"} `} 
                    {...email.input} 
                    {...controlBorderStyle} 
                    type="text" 
                    placeholder="Email Address"
                />

                {renderValidation(email.meta)}
            </Group>
            <Group {...style} {...borderRadiiRight}>
                <Control
                    required
                    className={`${phone.meta.touched && phone.meta.error ? "is-invalid" : "needs-validation"} `} 
                    {...phone.input} 
                    {...controlBorderStyle} 
                    {...borderRadiiRight}
                    type="text" 
                    placeholder="Phone"
                />

                {renderValidation(phone.meta)}

            </Group>
        </>
    )
}


export default contactFields