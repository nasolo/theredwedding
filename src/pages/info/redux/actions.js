import { createAction, nanoid } from '@reduxjs/toolkit'
import TERMS_CONSTANTS from './constants'

const {
    SUCCESS,
    PENDING,
    ERROR
} = TERMS_CONSTANTS


const fetchTerms = createAction(PENDING)
const errorTerms = createAction(ERROR)

const receiveTermsData = createAction(SUCCESS, json => {

    return {
        payload:  {
        receivedAt: Date.now,
        id: nanoid(),
        ...json
    }
}
})


export default {
    fetchTerms,
    errorTerms,
    receiveTermsData
}
