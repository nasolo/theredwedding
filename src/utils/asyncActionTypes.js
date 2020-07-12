const asyncActionTypes = (type) =>({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`
})

const API = "API"

const apiActions = {
    TYPES: asyncActionTypes,
    API
}


export default apiActions

