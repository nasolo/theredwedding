import apiActions from "../../../utils/asyncActionTypes"

const {TYPES, API} = apiActions

const blogConstants = {
    ...TYPES("BLOG"),
    API,
    
}

export default blogConstants