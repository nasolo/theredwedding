import allActions from './actions'
import { createReducer, combineReducers } from '@reduxjs/toolkit'
import appInitialState from '../../root/initialState'

const {
        handleDuration,
        handleEnded,
        handleProgress,
        handleSeekMouseUp,
        handleSeekChange,
        handleSeekMouseDown,
        handlePause,
        handleDisablePIP,
        handleEnablePIP,
        handleTogglePIP,
        handlePlay,
        handleSetPlaybackRate,
        handleToggleMuted,
        handleValumeChange,
        handleToggleLoop,
        handleLight,
        handleStop,
        handlePlayPause,
        load
} = allActions

const videoPlayer = createReducer(appInitialState.videoPlayer, {
        [load]: (state, action)=>{
            return {
                ...state,
                ...action.payload
            }
        },
        [handlePlayPause]: (state)=>{
            return{
                ...state,
                playing: !state.playing
           }
        },
        [handleStop]: (state, action) => { 
            return{
                ...state,
                ...action.payload
            }
        },
         [handleLight]: (state, action)=>{
                 return {
                     ...state,
                     ...action.payload
                 }
         },
         [handleToggleLoop]: (state)=>{
             return {
                 ...state,
                 loop: !state.loop
                 
             }
         },
         [handleValumeChange]: (state, action)=>{
            return {
                ...state,
                ...action.payload
            }
        },
        [handleToggleMuted]: (state)=>{
            return {
                ...state,
                muted: !state.muted
            }
         },
        [handleSetPlaybackRate]:(state, action)=>{
            return {
                ...state,
                ...action.payload
            }
         },
        [handleTogglePIP]:(state) =>{
            return {
                ...state,
                pip: !state.pip
            }
         },
        [handlePlay]:(state, action)=>{

            console.log(action)
             return {
                 ...state,
                 ...action.payload
             }
         },
        [handleEnablePIP]:(state, action)=>{
             return {
                 ...state,
                 ...action.payload
             }
         },
        [handleDisablePIP]: (state, action)=>{
            return {
                ...state,
                ...action.payload
            }
        },
        [handlePause]:(state, action) =>{
            return {
                ...state,
                ...action.payload
            }
        },
        [handleSeekMouseDown]:(state, action)=>{
            return {
                ...state,
                ...action.payload
            }
        },
        [handleSeekChange]:(state, action)=>{
            return {
                ...state,
                ...action.payload
            }
        },
        [handleSeekMouseUp]: (state, action) =>{
            return {
                ...state,
                ...action.payload
            }
        },
        [handleProgress]: (state, action)=>{
            
            return !state.seeking && state
        },
        [handleEnded]: (state, action)=>{
            return {
                ...state,
                playing: state.loop
            }
        },
        [handleDuration]: (state, action)=>{
            return {
                ...state,
                ...action.payload
            }
        }         
})


const createFilteredReducer = (reducer, predicate) =>{
    return (state, action) =>{
        const isInitializationCall = state === undefined;
        const name = action.payload && predicate(action) 
        const shouldRunWrappedReducer  = isInitializationCall || name 
        
        return shouldRunWrappedReducer ? reducer(state, action) : state

    }
}


export default combineReducers({
    gallery: createFilteredReducer(videoPlayer, action => action.payload.name === "gallery"),
    video: createFilteredReducer(videoPlayer, action => action.payload.name === "video")
})