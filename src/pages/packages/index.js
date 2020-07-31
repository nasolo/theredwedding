
import React from 'react'
import Heading from '../../elements/heading'


//page components
import Footer from './style/footer'
import WeddingPackages from './components/packagesList'
import PackagePageWrapper from './components/packagesList/style/pageWrapper'


const Packages = props => {

    return(
        <PackagePageWrapper>
            <Heading key="packages-page-header" className="h1" text="We have a wedding package that you will love..."/>
          
                <WeddingPackages/>
            
            <Footer text="And ask about proposals, engagements, and more..."/>
        </PackagePageWrapper>
    )
}

export default Packages