import { createReducer, createNextState } from '@reduxjs/toolkit'
import allActions from './actions'
import appInitialState from '../../../root/initialState'


const { 
    fetchTerms,
    errorTerms,
    receiveTermsData
} = allActions

const info = createReducer(appInitialState.terms, {
    [receiveTermsData]: createNextState(
        (info, action) => {

    for(const key in action.payload){
        info[key] = action.payload[key]
    }

        info.isFetching = false
        info.didInValidate = false            
        info.apiErrorMsg = null

            return info

    }),
    [errorTerms]: createNextState(
        (err, action) => {
            err.isFetching = false
            err.didInValidate = true
            err.apiErrorMsg = action.payload
            return err
        }),
    [fetchTerms]: createNextState(
        (fetch, action)=> {
            fetch.isFetching = true
            fetch.didInValidate = false
            fetch.apiErrorMsg = null
            return fetch
    })
})



export default info