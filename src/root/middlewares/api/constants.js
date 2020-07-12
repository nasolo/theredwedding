import apiActions from "../../../utils/asyncActionTypes";

const {TYPES, API} = apiActions

const apiTypes = {
    API,
    ...TYPES(API)
}

export default apiTypes