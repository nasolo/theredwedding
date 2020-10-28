import React from 'react'
import moment from 'moment'
import { useLocation } from 'react-router-dom'

import Link from '../../../../../elements/nav/navLink'
import Article from '../../../style/article'
import PostBody from '../../../style/body'
import PostDate from '../../../style/date'
import PostSummary from '../../../style/summary'
import PostTile from '../../../style/title'


const Post = ({id, title, summary, date, slug, content, index}) =>{

    const location = useLocation()
   
    const { pathname } = location;
    const isPost = pathname.indexOf('/post/') !== -1;

    
    const postLink = isPost ? `/blog` : `/post/${id}/${slug}`

    return (
        <Article key={id} id={`${slug}-${id}`}>
            <PostBody>
                <PostTile>
                    {title}
                </PostTile>
                <PostDate>
                    {moment(date).fromNow()}
                </PostDate>
                <PostSummary key={`${id}-summary`}>
                    {summary}
                </PostSummary>
                {isPost && 
                    <PostSummary key={`${id}-content`}>
                        {content}
                    </PostSummary>
                }
                <Link
                    to={postLink}
                    key={`${index}-${slug}`}
                    textAlign="right"
                    ml="auto"
                    width="fit-content"
                >
                    {isPost ? "Back" : "Read More"}
                </Link>
            </PostBody>

            
        </Article>
    )
}


export default Post