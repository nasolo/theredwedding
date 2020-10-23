import aboutUsConstants from './constants'
import { createAction, nanoid } from '@reduxjs/toolkit'

const {
    SUCCESS,
    ERROR,
    PENDING
} = aboutUsConstants

export const fetchAboutUsInfo = createAction(PENDING)
export const fetchError = createAction(ERROR)
export const reciveAboutUsInfo = createAction(SUCCESS, function prepare(json){
    return {
        payload:{
            receivedAt: Date.now(),
            id: nanoid(),
            pageContent: json.map(info =>{
                return {...info, id: nanoid()}
            })
        }
    }
})


export default {
    fetchAboutUsInfo,
    fetchError,
    reciveAboutUsInfo
}
