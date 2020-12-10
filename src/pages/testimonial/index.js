import React, {useMemo, useState } from 'react'
import { allTestimonies, } from './redux/selectors'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'

import Comments from './component/card'
import Container from '../../elements/container'
import Row from '../../elements/row'
import Col from '../../elements/col'
import FullScreenImage from '../../elements/imagePlaceholder'
import Newsletter from './component/newsletter'
import Indicators from './component/indicators'
import CommentsWrapper from './style/commentsWrapper'




const Testimonials = props => {


    const [carouselData, setCarouselData] = useState({})

    const {currentPageItems, handleIndicatorsAndChevrons, activeIndex} = carouselData
    const makeGetAllTestimonies = useMemo(allTestimonies, [])

    const {

        testimonies,
        bg
    
    } = useSelector(state => makeGetAllTestimonies(state), shallowEqual)
    
  
   const activeQuote = {
       ...testimonies[activeIndex]
   }
  

   console.log(currentPageItems)
   
    return (
        <Container fluid className="h-100 d-flex flex-column"> 
            <FullScreenImage src={bg} backgroundPosition="center center"/>
                <CommentsWrapper>
                   <Row className=" w-100">
                       <Col cols="12" margin="auto auto" minHeight="15rem">
                            <Comments quotes={testimonies} getCarouselInfo={setCarouselData}/>
                        </Col>0
                    </Row>
                </CommentsWrapper>

            <Row className=" d-lg-none align-self-end mb-0 mt-0 vw-100">
                    <Col className="bg-white">
                        <Newsletter/>
                    </Col>
            </Row>
       </Container>
    )
}

export default Testimonials


 // <Indicators quotes={testimonies} activeId={activeQuoteId} onClick={(card)=>dispatch(setActiveQuoteId(card))}/>

 /*

 <Col cols="12"  display="flex" marginTop="10rem" className="justify-content-center">
                            <Indicators quotes={currentPageItems} dispatch={handleIndicatorsAndChevrons} activeQuote={activeQuote}/>
                        </Col>

*/
