import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { Route, useHistory, useRouteMatch } from 'react-router-dom'
import Frame from '../../../../elements/Frame'


import { updatePostId } from '../../redux/actionCreators'
import { selectedPost } from '../../redux/selectors'

import PageContainer from '../../style/pageContainer'

import Post from '../postList/components/post'
import RedirectToMainBlog from './redirect'

const PostRouteComponent = ({ variants }, props) => {

    const history = useHistory()
    const dispatch = useDispatch()
    const setPostId = updatePostId(dispatch)

    const match = useRouteMatch({
        path: '/post/:id/:slug',
        strict: true,
        sensitive: true
      });
      const isPost = match && match.path.includes('/post')

      useEffect(() => {
        if(match === null) return 
        
        const { params: { id } } = match

        if(isPost && id){
            setPostId(id)
        } else {
            history.push('/blog')
        }
      }, [match])


      const getPost = useSelector(state => selectedPost(state), shallowEqual)

    return (
        
        <PageContainer className="post">
                <Post {...getPost} />
        </PageContainer>
        
    )
} 


export default PostRouteComponent