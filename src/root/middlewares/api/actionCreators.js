

const apiSuccessHandler = (action, response) =>{
   
    const { payload } = action

    if(!payload.actions.SUCCESS){
       return {
           type: payload.ERROR,
           payload: "No SUCCESS ACTION was provided to REDUX middleware"
       }
    } else if(!Object.getPrototypeOf(payload.actions.SUCCESS) === Function.prototype){
        return {
            type: payload.ERROR,
            payload: "ACTIONS must be a ACTION FUNCTION"
        }
    }
    
    return payload.actions.SUCCESS(response)

}

const apiFetchingHandler = (action) => {

    const { payload } = action


    if(!payload.actions.PENDING){
        return {
            type: payload.PENDING,
            payload: "No PENDING ACTION was provided to REDUX middleware"
        }
     } else if(!Object.getPrototypeOf(payload.actions.PENDING) === Function.prototype){
         return {
             type: payload.ERROR,
             payload: "ACTIONS must be a ACTION FUNCTION"
         }
     }
     

    return payload.actions.PENDING()
}

const apiErrorHandler = (action, response) =>{
    
    const { payload } = action


    
    if(!payload.actions.ERROR){
        return {
            type: payload.ERROR,
            payload: "No ERROR ACTION was provided to REDUX middleware"
        }
     } else if(!Object.getPrototypeOf(payload.actions.ERROR) === Function.prototype){
         return {
             type: payload.ERROR,
             payload: "ACTIONS must be a ACTION FUNCTION"
         }
     }
     
 
    return payload.actions.ERROR(response)
}

 const allActionCreators = {
    apiSuccessHandler,
    apiFetchingHandler,
    apiErrorHandler
}

export default allActionCreators