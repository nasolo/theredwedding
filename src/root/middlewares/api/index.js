
import axios from 'axios'
import allActionCreators from './actionCreators';
import apiTypes from './constants'



const {
            apiSuccessHandler,
            apiFetchingHandler,
            apiErrorHandler

    } = allActionCreators

const { API } = apiTypes

//check if action type is an api
const apiMiddleware = ({ dispatch }) => next => action => {
    if(action.type !== API.toString()){
        return next(action);
    }

//check if api request url exists if so dispatch pending rquest
    if(!action.url | action.url.length < 0){
        
        return dispatch(apiErrorHandler(action, "NO URL WAS PROVIDED"))
    } else {
        dispatch(apiFetchingHandler(action))
    }

   

    return axios.get(action.url)
    .then(response => response.data)
    .then(json => dispatch(apiSuccessHandler(action, json)))
    .catch(error => dispatch(apiErrorHandler(action, error)))

}


export default apiMiddleware

