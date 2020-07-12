import packagesConstants from './constants'
import { createAction, nanoid } from '@reduxjs/toolkit'



const {
    SUCCESS,
    ERROR,
    PENDING,
    VIEW_PACKAGE_DETAILS
} = packagesConstants

export const togglePackageDetailsPage = createAction(VIEW_PACKAGE_DETAILS)

export const fetchPackages = createAction(PENDING)

export const fetchError = createAction(ERROR)

export const receivePackages = createAction(SUCCESS, function prepare(json){
        return{ 
            payload: {
            receivedAt: Date.now(),
            id: nanoid(),
            weddingPackages: json.map(media =>{
                return {...media, id: nanoid()}
            })
        }
    }
})



const allActions = {
    fetchPackages,
    fetchError,
    receivePackages,
    togglePackageDetailsPage

}


export default allActions