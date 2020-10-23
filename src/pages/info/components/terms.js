import React from 'react'
import Container from '../../../elements/container'
import Link from '../../../elements/nav/navLink'
import P from '../../../elements/p'
import Heading from '../../../elements/heading'
import TermsJumbotron from '../style/jumbotron'


const Terms = ({heading, message, ...rest}) => {

    return (
        <Container fluid>
            <TermsJumbotron>
                <Heading as="h2" text={ heading } className="text-body text-left mb-3"/>
                <P className="text-body text-left"> { message } </P>
                <hr className="my-4"/>
                <Link class="btn btn-link btn-lg mb-2 text-body" to="/contact">
                   Close
                </Link>
            </TermsJumbotron>
        </Container>
    )

}


export default Terms