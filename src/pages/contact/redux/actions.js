import contactConstants from './constants'
import { createAction, nanoid } from '@reduxjs/toolkit'

const {
    SUCCESS,
    ERROR,
    PENDING
} = contactConstants

export const fetchContactInfo = createAction(PENDING)
export const fetchContactError = createAction(ERROR)
export const receivedContactInfo = createAction(SUCCESS, function prepare(json){
    return {
        payload:{
            receivedAt: Date.now(),
            id: nanoid(),
            background: json.background,
            heading: json.heading
        }
    }
})



export default {
    fetchContactInfo,
    fetchContactError,
    receivedContactInfo
}