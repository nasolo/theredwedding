import React, { useRef, useEffect} from 'react'
import PlayerWrapper from './playerwrapper'
import ReactPlayer from 'react-player'
import config from './selectors'
import allActions from './actions'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

const  {
      handleDuration,
      handleEnded,
      handleProgress,
      handlePause,
      handleDisablePIP,
      handleEnablePIP,
      handlePlay,
      load   
    } = allActions

  const { getPlayerConfig } = config
 
const VideoPlayer = ({videoUrl, name, id, poster}) => {


    const dispatch = useDispatch()
    const playerConfig = useSelector(state=>getPlayerConfig(state, name), shallowEqual)
    const playerRef = useRef(null)
    
      
     const  { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = playerConfig

    console.log(playerConfig)

    useEffect(
    ()=>{
            videoUrl !== undefined & videoUrl !== null && dispatch(load(videoUrl, name, id))
          },[videoUrl, dispatch]
      )

    return (
       
            <ReactPlayer
            className="react-player"
            key={id}
            wrapper={PlayerWrapper}
            ref={playerRef}
            url={url}
            playing={playing}
            controls={controls}
            light={poster ? poster : light}
            volume={volume}
            muted={muted}
            loop={loop}
            played={played}
            loaded={loaded}
            dureation={duration}
            playbackRate={playbackRate}
            pip={pip}
            onReady={()=> console.log('onReady')}
            onStart={()=> console.log('onStart')}
            onPlay={()=>dispatch(handlePlay(name))}
            onEnablePIP={()=>dispatch(handleEnablePIP)}
            onDisablePIP={()=>dispatch(handleDisablePIP)}
            onPause={()=>dispatch(handlePause)}
            onBuffer={()=> console.log('on buffer')}
            onSeek={(e)=>console.log('onSeek', e)}
            onEnded={()=>dispatch(handleEnded)}
            onError={e => console.log('onError',e)}
            onProgress={()=>dispatch(handleProgress)}
            onDuration={()=>dispatch(handleDuration)}
        />

    )

}


export default VideoPlayer