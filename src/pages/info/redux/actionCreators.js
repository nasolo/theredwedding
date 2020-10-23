import TERMS_CONSTANTS from "./constants"
import allActions from './actions'



const { SUCCESS, PENDING, ERROR, API } = TERMS_CONSTANTS
const {
        fetchTerms,
        errorTerms,
        receiveTermsData
        
    } = allActions

export const FETCH_TERMS_CONFIG = {
        type: API,
        url: "/data/info.json",
        payload: {
            SUCCESS,
            PENDING,
            ERROR,
        actions:{
            SUCCESS: receiveTermsData,
            PENDING: fetchTerms,
            ERROR: errorTerms
        }
    }
}

