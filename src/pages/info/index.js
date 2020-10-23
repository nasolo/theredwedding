
//Resources
import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useLocation } from 'react-router'



//styled components
import Wrapper from './style/wrapper'
import ContentContainer from './style/container';
import Container from '../../elements/container';

import { contactPageData } from '../contact/redux/selectors';
import Footer from '../contact/component/footer';

import ChatNavigation from '../contact/component/chatNavigation';
import Terms from './components/terms';
import { info } from './redux/selectors';



const TermsOfUse = props => {

   
    const location = useLocation()
    const { pathname } = location;

    const pageData = useSelector(state => info(state), shallowEqual)

    const { 
        copyrightNotice,
        links: { social, copyright }
    } = useSelector(state => contactPageData(state), shallowEqual)


    const pageInfo = pageData && pageData.find(page => page.route === pathname)
    const pageBackground = pageInfo && pageInfo.background

    return (
        <Wrapper>
            <ChatNavigation/>
            <ContentContainer ContentBackground={pageBackground}>

                <Terms {...pageInfo}/>

            </ContentContainer>
            <Container className="d-none d-lg-block w-100">
                <Footer notice={copyrightNotice} copyrightLinks={copyright} social={social}/>
            </Container>
        </Wrapper>
    )
}
    

//<Terms terms={terms}/>

export default TermsOfUse