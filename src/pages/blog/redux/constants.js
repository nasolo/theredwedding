import apiActions from "../../../utils/asyncActionTypes"

const {TYPES, API} = apiActions

const blogConstants = {
    ...TYPES("BLOG"),
    FILTER_POSTS_BY_DATE: 'FILTER_POSTS_BY_DATE',
    API,
    SET_ACTIVE_POST: 'SET_ACTIVE_POST'
    
}

export default blogConstants