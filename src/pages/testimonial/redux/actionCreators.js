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

const fetchTestimoniesHandler = () =>({
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
})

const shouldFetchTestimonies = state => {
    const testimonies = state.testimonials
    if(!testimonies){
        return true
    } else if(testimonies.isFetching){
        return false
    } else {
        return {
            didInValidate: testimonies.didInValidate,
            errorMsg: testimonies.apiErrorMsg
        }
    }
}


export const fetchAllTestimonialsData = () =>{
    return (dispatch, getState) =>{
        return shouldFetchTestimonies(getState) ? dispatch(fetchTestimoniesHandler()) : Promise.resolve()
    }
}