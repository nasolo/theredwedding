
import React from 'react'

//redux dependencies
import {useSelector, useDispatch, shallowEqual } from 'react-redux'
import allSelectors from './redux/selectors'

//styled components
import Heading from '../../elements/heading'


//page components
import Footer from './style/footer'
import WeddingPackages from './components/packagesList'
import Container from '../../elements/container'


//extract selector dependencies
const {
    getAllPackages,
    packageOverview
} = allSelectors

const Packages = props => {

    //define custom and redux hooks
    const dispatch = useDispatch()

   
    const {
        isPageOpen,
        activePageId,
        overview
    } = useSelector(state => packageOverview(state), shallowEqual)

    return(
        <Container fluid>
            <Heading text="We have a wedding package that you will love..."/>
          
                <WeddingPackages/>
            
            <Footer text="And ask about proposals, engagements, and more..."/>
        </Container>
    )
}

export default Packages