import React from 'react'
import validate from './validate'
import Form from "../../../../elements/forms"

import { Field, Fields, reduxForm } from "redux-form"
import Btn from '../../../../elements/buttons'
import messageFields from './fields/messageFields'
import selectFieldAboutUs from './fields/heardAboutUs'
import eventTypeSelectField from './fields/eventType'
import contactFields from './fields/contactFields'
import calender from './fields/calender'
import Services from '../services'
import Col from '../../../../elements/col'


const userContactInfo = ['firstName', 'lastName', 'email', 'phone']




const {Row, Group} = Form


const ContactForm = props => {

   
    const { handleSubmit, pristine, reset, submitting } = props


    

    return (
        <Form onSubmit={handleSubmit} className="needs-validation">
            <Row>
                <Fields names={userContactInfo} component={contactFields}/>
            </Row>
            <Row>
                <Field
                    name="message"
                    type="textarea"
                    component={messageFields}
                    label="Message"
                />
            </Row>
            <Row className="no-gutters">
                <Col cols="lg-3" className="col-6 d-none d-lg-block p-0 px-lg-1">
                    <Field
                            name="heardAboutUs"
                            type="select"
                            component={selectFieldAboutUs}
                            label="How did you hear about us?"
                            className="rounded-left"
                        />
                </Col>
                <Col cols="3" className="p-0 px-lg-1">
                    <Group>
                        <Field
                            name="startEnd"
                            type="input"
                            component={calender}
                            label="Start Date"
                            
                        />
                    </Group>
                </Col>
                <Col cols="3" className="p-0 px-lg-1">
                    <Group>
                        <Field
                            name="endDate"
                            type="input"
                            component={calender}
                            label="End Date"
                            className="rounded-right border-left"
                            
                            
                        />
                    </Group>
                </Col>
                <Col cols="lg-3" className="cols-6 order-first order-lg-last p-0 px-lg-1">
                    <Field
                        name="eventType"
                        type="select"
                        component={eventTypeSelectField}
                        label="select an option"
                        
                    />
                </Col>
                </Row>
                <Row>
                    <Field
                        name="services"
                        type="select"
                        component={Services}
                    />
                </Row>
                <Row
                    justifyContent="flex-end"
                >
                    <Col cols="lg-3">
                        <Btn 
                            className="btn-block p-3 mt-2"
                            type="submit"
                            fontSize=".75rem"
                            variant="secondary"
                            disabled={submitting}
                            background={"linear-gradient(180deg, rgba(94,94,94,1) 0%, rgba(31,31,31,1) 100%)"}
                        > 
                            GET QUOTE by email 
                        </Btn>
                    </Col>
                </Row>
            
        </Form>
    )
}

export default reduxForm({
    form: 'contactForm',
    validate
  })(ContactForm)

