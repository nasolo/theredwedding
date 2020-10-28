import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import GridCards from '../../../../elements/card/cardGrid'

import PostListWrapper from '../../style/postListWrapper'
import Post from './components/post'

const PostList = ({posts}) =>{

    return (
        <PostListWrapper>
            <GridCards col="1">
                {posts.map((post, index) => (
                    
                        <Post {...post} index={index}/>

                ))}
            </GridCards>
        </PostListWrapper>
    )
}


export default PostList