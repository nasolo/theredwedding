import {combineReducers} from 'redux'

const reducerManager = (state, action) =>{

    //Create an object which maps the initial reducers
    const reducers = { ...state }

    //initialize combine reducers
    let combinedReducers = combineReducers(reducers)

    console.log(combinedReducers)
    //An Array used to delete state keys
    let keystoRemove = []

    return  {
        getReducerMap: () => reducers,
        
        //remove reducer
        reduce: (state, action) => {
            if(keystoRemove.length > 0)  {
                state = { ...state }
                for (let key of keystoRemove){
                    delete state[key]
                }
                keystoRemove = []
            }
            return combinedReducers(state, action)
        },

        //add
        add: (key, reducer) =>{
            if(!key || reducers[key]){
                return
            }
            
            //Add the reducer to the reducer mapping
            reducers[key] = reducer

            //generate new combined reducer
            combinedReducers = combineReducers(reducers)
        },
        remove: key => {
            if(!key || !reducers[key]){
                return
            }

            //remove key from reducer mapping
            delete reducers[key]

            // Add the key to the list of keys for clean up
            keystoRemove.push(key)

            //generate a new combined reducer

            combinedReducers = combineReducers(reducers)
        }
    }
}


export default reducerManager