import React from 'react'
import Form from '../../../../elements/forms'
import { Field, reduxForm } from 'redux-form'
import Col from '../../../../elements/col'
import Buttons from '../../../../elements/buttons'
import Container from '../../../../elements/container'



const validate = values => {
    const errors = {}

    if(!values.name){
        errors.name = 'Required'
    }
    if (!values.email) {
        errors.email = 'Email address is required '
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }

      return errors

}

const rederInput = ({
    input,
    label,
    type,
    meta: {touched, error}
}) => (
    <Col>
        <Form.Control className={`${touched && error ? "is-invalid" : "needs-validation"} `} {...input} placeholder={label} type={type} reqiured/>
        {touched &&
        ((error && <Form.Validation meta={error} className="invalid-tooltip"/>))}
    </Col>
)


const NewsletterForm = props => {
    const {handleSubmt} = props
    return (
        <Form onSubmit={handleSubmt}>
            <Form.Row>
                <Field
                    name="name"
                    type="text"
                    component={rederInput}
                    label="Name"
                />
                <Field
                    name="email"
                    type="email"
                    component={rederInput}
                    label="Email"
                />
            </Form.Row>
            
                <Buttons type="submit" variant="grey" size="max-width" margin="1rem auto">SIGN UP now</Buttons>
           
        </Form>
    )
}


export default reduxForm({
    form: 'NewsletterForm',
    validate
})(NewsletterForm)
 