import React from 'react'
import { shallowEqual, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'

import Col from "../../../../elements/col"
import Container from "../../../../elements/container"
import Row from "../../../../elements/row"

import BackgoundImage from "../../style/BackgoundImage"

import Post from '../postList/components/post'

const PostRouteComponent = props => {


    const { id, slug } = useParams()

    
    const filterPostById = useSelector(state => state.blog.posts.find(post => post.id === id))

    console.log(filterPostById.background)

    return (
        <>
            <BackgoundImage src={filterPostById.background}/>
            <Container className="position-relative">
            <Row mb="3rem">
                <Col cols="12">
                    <Post {...filterPostById}/>
                </Col>
            </Row>
            </Container>
        </>
    )
} 

export default PostRouteComponent