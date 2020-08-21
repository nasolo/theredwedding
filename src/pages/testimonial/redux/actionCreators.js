import testimonialsConstants from "./constants";
import allActions from './actions'

const {
    SUCCESS, PENDING, ERROR, API
} = testimonialsConstants

const {
    fetchTestimonials,
    fetchError,
    receiveTestimonies
} = allActions

export const FETCH_TESTIMONIALS_CONFIG = {
        type: API,
        url: '/data/testimonials.json',
        payload:{
            SUCCESS,
            PENDING,
            ERROR,
        actions: {
            SUCCESS: receiveTestimonies,
            PENDING: fetchTestimonials,
            ERROR: fetchError
        }
    }
}