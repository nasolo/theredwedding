import React, { useEffect } from 'react'
import { useSelector, shallowEqual, connect } from 'react-redux'
import { hasSubmitSucceeded } from 'redux-form'

import {      
    BrowserRouter as Router, Switch, useHistory
} from "react-router-dom";

import PageWrapper from './style/contactPageWrapper'
import Container from '../../elements/container'
import { contactPageData } from './redux/selectors'
import ContactForm from './component/form'
import ContentWrapper from './style/contentWrapper'
import ChatNavigation from './component/chatNavigation'
import Footer from './component/footer'
import FormRoute from './component/form/formRoute'




const Contact = ({submitSucceeded, ...props}) => {

    const { background, 
            heading,
            forms,
            copyrightNotice,
            links: {social, copyright}
        } = useSelector(state => contactPageData(state), shallowEqual)

        
        let history = useHistory();
         

    const handleOnSubmit = data => console.log(data)

    const fields = forms !== undefined && forms.fields
    const field = forms !== undefined && forms.field

    useEffect(() => {
        submitSucceeded && history.replace("/thanks")
    })


    return (
        <PageWrapper>

            <ChatNavigation />

            <ContentWrapper ContentBackground={background}>
            <Container>
                <Router>
                    <Switch exact>
                        <FormRoute formSubmitSucceeded={submitSucceeded}>
                            <ContactForm onSubmit={handleOnSubmit} formField={field} formFields={fields} heading={heading}/>
                        </FormRoute>
                    </Switch>
                </Router>
            </Container>
            </ContentWrapper>
            <Container 
                className="d-none d-lg-block w-100"
            >
                <Footer notice={copyrightNotice} copyrightLinks={copyright} social={social}/>
            </Container>
        </PageWrapper>
    )
}


export default connect(state => ({
    submitSucceeded: hasSubmitSucceeded('contactForm')(state)
}))(Contact)