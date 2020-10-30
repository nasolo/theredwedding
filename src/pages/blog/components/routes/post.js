import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { matchPath, Route, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'


import { updatePostId } from '../../redux/actionCreators'
import { selectedPost } from '../../redux/selectors'

import BackgoundImage from "../../style/BackgoundImage"
import PageContainer from '../../style/pageContainer'

import Post from '../postList/components/post'
import RedirectToMainBlog from './redirect'

const PostRouteComponent = props => {

    const history = useHistory()
    const dispatch = useDispatch()
    const setPostId = updatePostId(dispatch)

    const match = useRouteMatch({
        path: '/post/:id/:slug',
        strict: true,
        sensitive: true
      });

      useEffect(() => {
        if(match === null) return 
        const isPost = match.path.includes('/post')
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
            <Route exact path="/post/">
                <RedirectToMainBlog />
            </Route>
            <BackgoundImage />
                <Post {...getPost} />
        </PageContainer>

    )
} 


export default PostRouteComponent