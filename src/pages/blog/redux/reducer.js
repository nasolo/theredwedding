import { createReducer, createNextState } from '@reduxjs/toolkit'
import {
    fetchBlogData,
    fetchError,
    receiveBlogData,
    selectPostDate
} from './actions'
import appInitialState from '../../../root/initialState'

const blog = createReducer(appInitialState.blog, {
    [receiveBlogData]: createNextState(
        (blog, action)=>{

            for(const key in action.payload){
                blog[key] = action.payload[key]
            }

            blog.isFetching = false
            blog.didInvalidate = false
            blog.apiErrorMsg = null
            
            
            return blog
        }),
    [fetchError]: createNextState(
        (err, action) =>{
            err.isFetching = false
            err.didInvalidate = true
            err.apiErrorMsg = action.payload

            return err
        }),
    [fetchBlogData]: createNextState(
        (fetch, action) => {
            fetch.isFetching = true
            fetch.didInvalidate = false
            fetch.apiErrorMsg = null

            return fetch
        }),
    [selectPostDate]: createNextState(
        (blog, action) =>{
            
            blog.selectedDates = action.payload

            return blog
        }
    )

})

export default blog