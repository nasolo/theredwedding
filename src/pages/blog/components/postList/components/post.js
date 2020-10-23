import React from 'react'
import moment from 'moment'

import Link from '../../../../../elements/nav/navLink'
import Article from '../../../style/article'
import PostBody from '../../../style/body'
import PostDate from '../../../style/date'
import PostSummary from '../../../style/summary'
import PostTile from '../../../style/title'


const Post = ({id, title, summary, date, slug, index}) =>{

    console.log()
    return (
        <Article key={id} id={`${slug}-${id}`}>
            <PostBody>
                <PostTile>
                    {title}
                </PostTile>
                <PostDate>
                    {moment(date).fromNow()}
                </PostDate>
                <PostSummary>
                    {summary}
                </PostSummary>
            </PostBody>

            <Link
                to={`/post/${id}/${slug}`}
                key={`${index}-${slug}`}
            >
                Read More
            </Link>
        </Article>
    )
}


export default Post