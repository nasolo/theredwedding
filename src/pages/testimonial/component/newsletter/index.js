import React from 'react'
import Container from '../../../../elements/container'
import Heading from '../../../../elements/heading'
import P from '../../../../elements/p'
import NewsletterForm from './newsletterForm'

const Newsletter = props =>{
    return (
        <Container>
            <Heading text="Sign up for our Newsletter" color="blacks.0" as="h2"/>
            <P color="blacks.0">Sign up and keep connectd with us on new ideas and technology for making your weddings and proposals great. </P>
            <NewsletterForm />
        </Container>
    )
}


export default Newsletter