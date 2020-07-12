import { createReducer, createNextState } from '@reduxjs/toolkit'
import allActions from './actions'
import appInitialState from '../../../root/initialState'


const {
    fetchPackages,
    fetchError,
    receivePackages,
    togglePackageDetailsPage
} = allActions


const packages = createReducer(appInitialState.packages, {
[receivePackages]: createNextState(
    (packages, action)=>{
        packages.isFetching = false
        packages.didInValidate = false
        packages.lastUpdate = action.payload.receivedAt
        packages.weddingPackages = action.payload.weddingPackages
        packages.id = action.payload.id
        packages.apiErrorMsg = null
        packages.activeId= null
        
        return packages
   }),
[fetchError]: createNextState(
    (err, action) => {
        err.isFetching = false
        err.didInValidate = true
        err.apiErrorMsg = action.payload
        return err
    }),

    [fetchPackages]: createNextState(
        (fetch, action)=> {
            fetch.isFetching = true
            fetch.didInValidate = false
            fetch.apiErrorMsg = null
            return fetch
        }
    ),
    [togglePackageDetailsPage]: createNextState(
        (state, action) => {
            
            state.isPageOpen = action.payload !== undefined ?  true : false
            state.activePageId = action.payload !== undefined ? action.payload : null
            
            return state
        }
        
    )

})

export default packages