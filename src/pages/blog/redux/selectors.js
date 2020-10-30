import { createSelector } from 'reselect'
import moment from 'moment'

const  getAllBlogIngo = state => state.blog
const isWithinRanges = (date, dateRange) => moment(date).isBetween(...dateRange)

export const blogPageData = createSelector(
    [getAllBlogIngo],
    ({posts, background, selectedDates}) => {

        const blogPostData = {
            posts,
            background,
            selectedDates
        }

        const shouldFilterBlog = selectedDates === null || !selectedDates instanceof Array

        if(shouldFilterBlog) return blogPostData

        const filteredPosts = posts.filter(post => isWithinRanges(post.date, selectedDates))

        return {
            ...blogPostData,
            posts: filteredPosts
        }
    }
)


export const selectedPost  = createSelector(
    [getAllBlogIngo],
    ({activePostId, posts}) => activePostId === null ? posts : posts.find(post => post.id === activePostId)
)