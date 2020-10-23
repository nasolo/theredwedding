import React from 'react'
import Container from '../../elements/container'
import { useSelector, shallowEqual } from 'react-redux'
import { blogPageData } from './redux/selectors'
import BackgoundImage from './style/BackgoundImage'
import PageContainer from './style/pageContainer'
import Row from '../../elements/row'
import DateSelector from './components/calender'
import Col from '../../elements/col'
import PostList from './components/postList'

const Blog = props => {

    const { 
        background,
        posts,
        pages
    } = useSelector(state => blogPageData(state), shallowEqual)

    
   

    return (
        <PageContainer>
            <BackgoundImage src={background}/>
                <Container className="position-relative">
                    <Row>
                        <Col cols="12" lg="4">
                            <DateSelector />
                        </Col>
                        <Col cols="12" lg="8">
                            <PostList posts={posts}/>
                        </Col>
                    </Row>
                </Container>
        </PageContainer>
    )
}

export default Blog