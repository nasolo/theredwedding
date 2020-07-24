import HANDLE from './constants'
import { createAction } from '@reduxjs/toolkit'




const load = createAction(HANDLE.LOAD, function prepare(url, id, ref){
  return{
       
        payload:{
            url,
            played: 0,
            loaded: 0,
            pip: false,
            id,
            ref
        }
    }
})

const handleVideoRef = createAction(HANDLE.SET_REF, (id, ref) =>({
    payload:{
        id,
        ref
    }
}))

//play pause handle in reducer
const handlePlayPause = createAction(HANDLE.PLAY_PAUSE, function prepare(id){
    return {
       payload: {
           id
       }
    }
})

const handleStop = createAction(HANDLE.STOP, function prepare(id){
    return {
        
        payload: {
            url: null,
            playing: false,
            id
        }
    }
})


const handleLight = createAction(HANDLE.LIGHT, function prepare(light, id){
       return {
       
        payload: {
            light: light,
            id
        }
    }
})

//toggle loop in reducer
const handleToggleLoop =createAction(HANDLE.TOGGLE_LOOP, function prepare(id){
    return {
       id
    }
})

const handleVolumeChange = createAction(HANDLE.VOLUME_CHANGE, function prepare(e, id){
    return{
      
        payload: {
            volume: parseFloat(e.target.value),
            id
        }
    }
})

//mute toggle is handled by the reducer
const handleToggleMuted = createAction(HANDLE.TOGGLE_MUTED, function prepare(id){
    return {
        payload: {
            id
        }
    }
})

const handleSetPlaybackRate = createAction(HANDLE.SET_PLAY_BACK_RATE, function prepare(e, id){
    return {
      
        payload: {
            playbackRate: parseFloat(e.target.value),
            id
        }
    }
})

//pip handled by reducer
const handleTogglePIP = createAction(HANDLE.TOGGLE_PIP, function prepare(id){
    return {
       id
    }
})

const handlePlay = createAction(HANDLE.PLAY, function prepare(id){
    return {
      
        payload: {
            playing: true,
            id
        }
    }
})

const handleEnablePIP = createAction(HANDLE.PIP, function prepare(id){
    return{
      
        payload: {
            pip: true,
            id
        }
    }
})

const handleDisablePIP = createAction(HANDLE.DISABLE_PIP, function prepare(id){
    return {
       
        payload: { 
            pip: false,
            id
        }
    }
})

const handlePause = createAction(HANDLE.PAUSE, function prepate(id){
   return {
    
        payload: {
            playing: false,
            id
        }
    }
})

const handleSeekMouseDown = createAction(HANDLE.SEEKMOUSE_DOWN, function prepare(e, id){
   return {
       
        payload: {
            seeking: true,
            id
        }
    }
})

const handleSeekChange = createAction(HANDLE.SEEK_CHANGE, function prepare(e, id){
    return {
      
        payload: { 
            played: parseFloat(e.target.value),
            id
        }
    }
})

const handleSeekMouseUp = createAction(HANDLE.SEEK_MOUSEUP, function prepare(e, id){
    return {
           
            payload: {
                seeking: false,
                played: parseFloat(e.target.value),
                id
            }
    }
})

  const handleProgress = createAction(HANDLE.PROGRESS, function prepare(id, { played }){
    return {
        payload:{
            played,
            id
        }
       
    }
})

///set state.loop in reducer
  const handleEnded = createAction(HANDLE.ENDED, id =>({
      payload: {
          id
      }
  }))

const handleDuration = createAction(HANDLE.ENDED, function prepare(id, duration){
    
    return {
        payload: {
            duration,
            id
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
    handleVolumeChange,
    handleToggleLoop,
    handleLight,
    handleStop,
    handlePlayPause,
    load,
    handleVideoRef
}


export default allActions