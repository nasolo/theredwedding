import HANDLE from './constants'
import { createAction } from '@reduxjs/toolkit'




const load = createAction(HANDLE.LOAD, function prepare(url, name, id){
  return{
       
        payload:{
            url,
            played: 0,
            loaded: 0,
            pip: false,
            id,
            name
        }
    }
})


//play pause handle in reducer
const handlePlayPause = createAction(HANDLE.PLAY_PAUSE, function prepare(name){
    return {
       payload: {
           name
       }
    }
})

const handleStop = createAction(HANDLE.STOP, function prepare(name){
    return {
        
        payload: {
            url: null,
            playing: false,
            name
        }
    }
})


const handleLight = createAction(HANDLE.LIGHT, function prepare(light, name){
       return {
       
        payload: {
            light: light,
            name
        }
    }
})

//toggle loop in reducer
const handleToggleLoop =createAction(HANDLE.TOGGLE_LOOP, function prepare(name){
    return {
       name
    }
})

const handleValumeChange = createAction(HANDLE.VOLUME_CHANGE, function prepare(e, name){
    return{
      
        payload: {
            volume: parseFloat(e.target.value),
            name
        }
    }
})

//mute toggle is handled by the reducer
const handleToggleMuted = createAction(HANDLE.TOGGLE_MUTED, function prepare(name){
    return {
        payload: {
            name
        }
    }
})

const handleSetPlaybackRate = createAction(HANDLE.SET_PLAY_BACK_RATE, function prepare(e, name){
    return {
      
        payload: {
            playbackRate: parseFloat(e.target.value),
            name
        }
    }
})

//pip handled by reducer
const handleTogglePIP = createAction(HANDLE.TOGGLE_PIP, function prepare(name){
    return {
       name
    }
})

const handlePlay = createAction(HANDLE.PLAY, function prepare(name){
    return {
      
        payload: {
            playing: true,
            name
        }
    }
})

const handleEnablePIP = createAction(HANDLE.PIP, function prepare(name){
    return{
      
        payload: {
            pip: true,
            name
        }
    }
})

const handleDisablePIP = createAction(HANDLE.DISABLE_PIP, function prepare(name){
    return {
       
        payload: { 
            pip: false,
            name
        }
    }
})

const handlePause = createAction(HANDLE.PAUSE, function prepate(name){
   return {
    
        payload: {
            playing: false,
            name
        }
    }
})

const handleSeekMouseDown = createAction(HANDLE.SEEKMOUSE_DOWN, function prepare(e, name){
   return {
       
        payload: {
            seeking: true,
            name
        }
    }
})

const handleSeekChange = createAction(HANDLE.SEEK_CHANGE, function prepare(e, name){
   

    
    return {
      
        payload: { 
            played: parseFloat(e.target.value),
            name
        }
    }
})

const handleSeekMouseUp = createAction(HANDLE.SEEK_MOUSEUP, function prepare(e, name){
    return {
           
            payload: {
                seeking: false,
                played: parseFloat(e.target.value),
                name
            }
    }
})

  const handleProgress = createAction(HANDLE.PROGRESS, function prepare(name, {played}){
    return {
        payload:{
            played,
            name
        }
       
    }
})

///set state.loop in reducer
  const handleEnded = createAction(HANDLE.ENDED, function prepare(name){
    return {
       name
    }
})

const handleDuration = createAction(HANDLE.ENDED, function prepare(name, duration){
    console.log(duration, name)
    return {
        payload: {
            duration,
            name
        }
    }
})


const allActions = {
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
}


export default allActions