import aboutUsConstants from "./constants";
import allActions from './actions'


const {
    SUCCESS, PENDING, ERROR, API
} = aboutUsConstants

const {
    fetchAboutUsInfo,
    fetchError,
    reciveAboutUsInfo
} = allActions


export const FETCH_ABOUTUS_CONFIG = {
        reducer: "aboutUs",
        type: API,
        url: '/data/about.json',
        payload:{
            SUCCESS,
            PENDING,
            ERROR,
        actions: {
            SUCCESS: reciveAboutUsInfo,
            PENDING: fetchAboutUsInfo,
            ERROR: fetchError
        }
    }
}