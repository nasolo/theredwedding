import packagesConstants from "./constants";
import allActions from './actions'



const {
    SUCCESS, PENDING, ERROR, API
} = packagesConstants

const {
    fetchPackages,
    fetchError,
    receivePackages
} = allActions


//Create fetch handler for the custom redux api middleware
//dependencies PAYLOAD {SUCCESS, PENDING ERROR} = CONSTANTS
// API action dependencies SUCCESS, PENDING, ERROR



const fetchPackagesHandler = () =>({
        type: API,
        url: "/data/packages.json",
        payload: {
            SUCCESS,
            PENDING,
            ERROR,
        actions: {
            SUCCESS: receivePackages,
            PENDING: fetchPackages,
            ERROR: fetchError
        }
    }
})


const shouldFetchPackages = state => {
    const packages = state.packages
    if(!packages){
        return true
    } else if(packages.isFetching){
        return false
    } else {
        return {
                    didInValidate: packages.didInValidate,
                    errorMsg: packages.apiErrorMsg
                }
    }
}

export function fetchAllPackagesData(){
    return (dispatch, getState) =>{
        return shouldFetchPackages(getState) ? dispatch(fetchPackagesHandler()) : Promise.resolve()
    }
}

