import headerConstants from './constants'
import {
    fetchNavigation,
    fetchNavigationError,
    receivedNavigationData
} from './actions'


const {
    SUCCESS, PENDING, ERROR, API
} = headerConstants

export const FETCH_NAV_CONFIG = {
        type: API,
        reducer: "navigation",
        url: '/data/navigation.json',
        payload: {
            SUCCESS, 
            PENDING, 
            ERROR,
        actions:{
            SUCCESS: receivedNavigationData,
            ERROR: fetchNavigationError,
            PENDING: fetchNavigation
        }
    }
}
