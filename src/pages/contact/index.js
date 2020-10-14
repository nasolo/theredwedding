import React from 'react'
import PageWrapper from './style/contactPageWrapper'
import Container from '../../elements/container'
import { contactPageData } from './redux/selectors'
import { useSelector, shallowEqual } from 'react-redux'
import Heading from '../../elements/heading'
import Row from '../../elements/row'
import Col from '../../elements/col'
import ContactForm from './component/form'
import ContentWrapper from './style/contentWrapper'
import ChatNavigation from './component/chatNavigation'
import Footer from './component/footer'





const Contact = props => {

    const { background, 
            heading,
            forms,
            copyrightNotice,
            links
        } = useSelector(state => contactPageData(state), shallowEqual)

    const handleOnSubmit = data => console.log(data)

    const fields = forms !== undefined && forms.fields
    const field = forms !== undefined && forms.field
    const { copyright, social } = links

    return (
        <PageWrapper>

            <ChatNavigation />

            <ContentWrapper backgroundImage={`url(${background})`}>
            <Container>
                <Row>
                    <Col cols={12} pb="1rem" className="d-none d-lg-block">
                        <Heading as="h1" text={heading} className="text-left"/>
                    </Col>
                    <Col cols={12}>
                        <ContactForm onSubmit={handleOnSubmit} formField={field} formFields={fields}/>
                    </Col>
                    </Row>
            </Container>
            </ContentWrapper>
            <Container className="d-none d-lg-block">
                <Footer notice={copyrightNotice} copyrightLinks = {copyright} social={social}/>
            </Container>
        </PageWrapper>
    )
}


export default Contact