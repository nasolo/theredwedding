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



export const FETCH_PACKAGES_CONFIG = {
    reducer: 'packages',    
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
}
