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





const Contact = props => {

    const { background, heading } = useSelector(state => contactPageData(state), shallowEqual)

    const handleOnSubmit = data => console.log(data)


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
                        <ContactForm onSubmit={handleOnSubmit}/>
                    </Col>
                    </Row>
            </Container>
            </ContentWrapper>
        </PageWrapper>
    )
}


export default Contact