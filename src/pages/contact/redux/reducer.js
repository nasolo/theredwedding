import { createReducer, createNextState } from '@reduxjs/toolkit'
import allActions from './actions'
import appInitialState from '../../../root/initialState'


const {
    fetchContactInfo,
    fetchContactError,
    receivedContactInfo
} = allActions

const contact = createReducer(appInitialState.contact, {
    [receivedContactInfo]: createNextState(
        (contact, action)=>{

            console.log(action.payload)

            contact.isFetching = false
            contact.didInvalidate = false
            contact.lastUpdate = action.payload.receivedAt
            contact.id = action.payload.id
            contact.apiErrorMsg = null
            contact.background = action.payload.background
            contact.heading = action.payload.heading
            contact.copyrightNotice = action.payload.copyrightNotice
            contact.forms = action.payload.form
            contact.links = action.payload.links
            contact.social = action.payload.social

            return contact

        }),
    [fetchContactError]: createNextState(
        (err, action) =>{
            err.isFetching = false
            err.didInvalidate = true
            err.apiErrorMsg = action.payload

            return err
        }),
    [fetchContactInfo]: createNextState(
        (fetch, action) => {
            fetch.isFetching = true
            fetch.didInvalidate = false
            fetch.apiErrorMsg = null

            return fetch
        })
})

export default contact