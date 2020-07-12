import React, { useCallback, useEffect, useMemo } from 'react'
import { allTestimonies, activeQuote } from './redux/selectors'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { fetchAllTestimonialsData } from './redux/actionCreators'
import Comments from './component/card'
import Container from '../../elements/container'
import Row from '../../elements/row'
import Col from '../../elements/col'
import FullScreenImage from '../../elements/imagePlaceholder'
import Indicators from './component/indicators'
import { setActiveQuoteId } from './redux/actions'
import Newsletter from './component/newsletter'




const Testimonials = props => {

    const dispatch = useDispatch()

    const makeGetAllTestimonies = useMemo(allTestimonies, [])

    const {
        isFetching,
        testimonies,
        bg,
        activeQuoteId,
        slideData,
        direction
    } = useSelector(state => makeGetAllTestimonies(state), shallowEqual)
    
    const { activeMedia, next, prev } = slideData

    const fetchPageData = useCallback(() => {
            dispatch(fetchAllTestimonialsData())
        },[testimonies])

    useEffect(() => {
        !isFetching && testimonies.length < 1 && fetchPageData()
    },[])
    


    return (
        <Container fluid className="h-100 d-flex flex-column"> 
            <FullScreenImage src={bg} backgroundPosition="center center"/>
    
                   <Container fluid className="m-auto" overflow='hidden'>
                        <Comments {...activeMedia} next={next} prev={prev} direction={direction}/>
                   
                    <Row className="flex-column bg-transparent" margin={{_:"auto", sm: "3rem auto", lg: "auto"}}>
                    <Col className="d-flex justify-content-center">
                        <Indicators quotes={testimonies} activeId={activeQuoteId} onClick={(card)=>dispatch(setActiveQuoteId(card))}/>
                    </Col>
                </Row>
                </Container>

            <Row className=" d-lg-none align-self-end mb-0 mt-auto vw-100">
                    <Col className="bg-white">
                        <Newsletter/>
                    </Col>
                </Row>
            

       </Container>
    )
}

export default Testimonials