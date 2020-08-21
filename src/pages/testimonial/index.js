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




const Testimonials = props => {


    const [carouselData, setCarouselData] = useState({})

    const {currentPageItems, setPageItem, activeIndex} = carouselData
    const makeGetAllTestimonies = useMemo(allTestimonies, [])

    const {

        testimonies,
        bg
    
    } = useSelector(state => makeGetAllTestimonies(state), shallowEqual)
    
  
   const activeQuote = {
       ...testimonies[activeIndex]
   }
  
   
    return (
        <Container fluid className="h-100 d-flex flex-column"> 
            <FullScreenImage src={bg} backgroundPosition="center center"/>
    
                   <Container fluid 
                        className="d-flex flex-column"
                        overflow='hidden'
                        height="100%"
                    >
                        <Comments quotes={testimonies} getCarouselInfo={setCarouselData}/>
                   
                    <Row className="flex-column bg-transparent" margin={{_:"auto", sm: "3rem auto", lg: "auto"}}>
                    <Col className="d-flex justify-content-center">
                      <Indicators items={currentPageItems} setActiveIndex={setPageItem} activeQuote={activeQuote}/>
                    </Col>
                </Row>
                </Container>

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