import apiActions from "../../../utils/asyncActionTypes"


const {TYPES, API} = apiActions

const testimonialsConstants = {
    ...TYPES("TESTIMONIALS"),
    API,
    SET_ACTIVE_ID: 'SET_ACTIVE_QUOTE_ID'
}

export default testimonialsConstants