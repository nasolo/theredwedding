import React from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import Col from "../../../../elements/col"
import Container from "../../../../elements/container"
import Row from "../../../../elements/row"
import { selectPostDate } from "../../redux/actions"
import { blogPageData } from '../../redux/selectors'
import BackgoundImage from "../../style/BackgoundImage"
import DateSelector from "../calender"
import PostList from "../postList"

const PostListRouteComponent = props => {


    const dispatch = useDispatch()
    const selecteDate = bindActionCreators(selectPostDate, dispatch) 
    const onDateChange = date => selecteDate(date)

    const { 
        background,
        selectedDates,
        posts,
    } = useSelector(state => blogPageData(state), shallowEqual)

    return (
        <>
            <BackgoundImage src={background}/>
            <Container className="position-relative">
            <Row mb="3rem">
                <Col cols="12" lg="4">
                    <DateSelector onDateChange={onDateChange} selectedDates={selectedDates}/>
                </Col>
                <Col cols="12" lg="8">
                    <PostList posts={posts}/>
                </Col>
            </Row>
            </Container>
        </>
    )
} 

export default PostListRouteComponent