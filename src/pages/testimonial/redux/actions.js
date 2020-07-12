import testimonialsConstants from "./constants";
import { createAction, nanoid  } from "@reduxjs/toolkit";


const {
    SUCCESS,
    ERROR,
    PENDING,
    SET_ACTIVE_ID
} = testimonialsConstants

export const setActiveQuoteId = createAction(SET_ACTIVE_ID)
export const fetchTestimonials = createAction(PENDING)
export const fetchError = createAction(ERROR)
export const receiveTestimonies = createAction(SUCCESS, function prepare(json){
    return {
        payload:{
            receivedAt: Date.now(),
            id: nanoid(),
            bg: json.bg,
            testimonies: json.testimonies.map((info, position) =>{
                return {
                    ...info, 
                    position, 
                    id: nanoid()
                }
            })
        }
    }
})


export default {
    fetchTestimonials,
    fetchError,
    receiveTestimonies,
    setActiveQuoteId
}

