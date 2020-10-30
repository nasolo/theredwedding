import blogConstants from "./constants";
import {fetchBlogData, fetchError, receiveBlogData, setActivePost} from './actions'
import { bindActionCreators } from "redux";


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

export const updatePostId = dispatch => bindActionCreators(setActivePost, dispatch)