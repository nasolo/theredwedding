import faker from 'faker'
import blogConstants from './constants'
import { createAction, nanoid } from '@reduxjs/toolkit'
import { capitalizeWords } from '../helpers/utilities'


const {
    PENDING,
    ERROR,
    SUCCESS,
    FILTER_POSTS_BY_DATE
} = blogConstants

const {
    date: {past, recent},
    lorem: { paragraph, paragraphs, slug, words },
    image: { imageUrl }
} = faker

const mockPosts = Array(20)
    .fill()
    .map(() =>{
        const summary = paragraph();
        return {
            id: nanoid(),
            title: capitalizeWords(words()),
            summary,
            content: `${summary}\n${paragraphs()}`,
            date: past(),
            slug: slug(),
            background: imageUrl(4000,1250)
        }
    })


export const fetchBlogData = createAction(PENDING)
export const selectPostDate = createAction(FILTER_POSTS_BY_DATE)
export const fetchError = createAction(ERROR)
export const receiveBlogData = createAction(SUCCESS, json => ({
    payload:{
        receivedAt: Date.now(),
        id: nanoid(),
        background: "assets/images/blog/blog_background.jpg",
        posts: mockPosts
    }
}))


export default {
    fetchBlogData,
    fetchError,
    receiveBlogData,
    selectPostDate
}