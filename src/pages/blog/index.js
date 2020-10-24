import React from 'react'
import Container from '../../elements/container'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { blogPageData } from './redux/selectors'
import BackgoundImage from './style/BackgoundImage'
import PageContainer from './style/pageContainer'
import Row from '../../elements/row'
import DateSelector from './components/calender'
import Col from '../../elements/col'
import PostList from './components/postList'
import { selectPostDate } from './redux/actions'
import { bindActionCreators } from 'redux'

const Blog = props => {

    const { 
        background,
        selectedDates,
        posts,
        pages
    } = useSelector(state => blogPageData(state), shallowEqual)

    
    const dispatch = useDispatch()
    const selecteDate = bindActionCreators(selectPostDate, dispatch) 

    const onDateChange = date => selecteDate(date)

    return (
        <PageContainer>
            <BackgoundImage src={background}/>
                <Container className="position-relative">
                    <Row mb="3rem">
                        <Col cols="12" lg="4">
                            <DateSelector onDateChange={onDateChange} selectedDates={selectedDates}/>
                        </Col>
                        <Col cols="12" lg="8">
                            <PostList posts={posts} />
                        </Col>
                    </Row>
                </Container>
        </PageContainer>
    )
}

export default Blog