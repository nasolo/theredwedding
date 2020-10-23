import { createSelector } from 'reselect'
import chunk from 'lodash/chunk'

const  getAllBlogIngo = state => state.blog

export const blogPageData = createSelector(
    [getAllBlogIngo],
    ({posts, background}) => ({
       background, 
       posts, 
       pages: chunk(posts, 5)
    })
)
