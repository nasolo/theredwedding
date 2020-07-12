import { createReducer, createNextState } from '@reduxjs/toolkit'
import allActions from './actions'
import appInitialState from '../../../root/initialState'

const {
    fetchAboutUsInfo,
    fetchError,
    reciveAboutUsInfo
} = allActions

const aboutUs = createReducer(appInitialState.aboutUs, {
    [reciveAboutUsInfo]: createNextState(
        (aboutUs, action)=>{
            aboutUs.isFetching = false
            aboutUs.didInvalidate = false
            aboutUs.lastUpdate = action.payload.receivedAt
            aboutUs.pageContent = action.payload.pageContent
            aboutUs.id = action.payload.id
            aboutUs.apiErrorMsg = null
            aboutUs.activeId = null
            
            return aboutUs
        }),
    [fetchError]: createNextState(
        (err, action) =>{
            err.isFetching = false
            err.didInvalidate = true
            err.apiErrorMsg = action.payload

            return err
        }),
    [fetchAboutUsInfo]: createNextState(
        (fetch, action) => {
            fetch.isFetching = true
            fetch.didInvalidate = false
            fetch.apiErrorMsg = null

            return fetch
        })
})

export default aboutUs