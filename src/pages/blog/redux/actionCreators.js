import blogConstants from "./constants";
import {fetchBlogData, fetchError, receiveBlogData} from './actions'


const {
    SUCCESS, PENDING, ERROR, API
} = blogConstants


export const BLOG_API_CONFIG = {
        reducer: "aboutUs",
        type: API,
        url: '/data/blog.json',
        payload:{
            SUCCESS,
            PENDING,
            ERROR,
        actions: {
            SUCCESS: receiveBlogData,
            PENDING: fetchBlogData,
            ERROR: fetchError
        }
    }
}