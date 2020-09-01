import contactConstants from "./constants";
import allActions from './actions'


const {
    SUCCESS, PENDING, ERROR, API
} = contactConstants

const {
    fetchContactInfo,
    fetchContactError,
    receivedContactInfo
} = allActions


export const FETCH_CONTACT_CONFIG = {
        reducer: "contact",
        type: API,
        url: '/data/contact.json',
        payload:{
            SUCCESS,
            PENDING,
            ERROR,
        actions: {
            SUCCESS: receivedContactInfo,
            PENDING: fetchContactInfo,
            ERROR: fetchContactError
        }
    }
}