import React, { useRef, useEffect} from 'react'
import PlayerWrapper from './style/playerwrapper'
import ReactPlayer from 'react-player'
import config from './selectors'
import allActions from './actions'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import PlayerContainer from './style/playerContainer'
import PlayButton from './component/play'
import { bindActionCreators } from 'redux'
import Controls from './component/controls'

const { getPlayerConfig } = config
 
const VideoPlayer = ({videoUrl, name, id, poster}) => {



    const dispatch = useDispatch()
    const playerConfig = useSelector(state=>getPlayerConfig(state, name), shallowEqual)
    const {
      handleDuration,
      handleEnded,
      handleProgress,
      handlePause,
      handleDisablePIP,
      handleEnablePIP,
      handlePlay,
      load,
      handlePlayPause
    } = bindActionCreators(allActions, dispatch)
    const playerRef = useRef(null)
    
    
      
     const  { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = playerConfig

     const shouldLoadVideo = videoUrl !== undefined

     useEffect(
    ()=>{
          shouldLoadVideo && load(videoUrl, name, id)
          },[videoUrl, dispatch]
      )

    return (
      <PlayerContainer>
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
            onPlay={()=>handlePlay(name)}
            onEnablePIP={()=>handleEnablePIP()}
            onDisablePIP={()=>handleDisablePIP()}
            onPause={()=>handlePause()}
            onBuffer={()=> console.log('on buffer')}
            onSeek={(e)=>console.log('onSeek', e)}
            onEnded={()=>handleEnded()}
            onError={e => console.log('onError',e)}
            onProgress={(progress)=>handleProgress(name, progress)}
            onDuration={(duration)=>handleDuration(name, duration)}
            onClick={()=>handlePlayPause(name)}
        />
          {!poster &&
            <PlayButton
              playing={playing}
              onClick={() =>handlePlay(name)}
              poster={poster}
            />
          }
    
      </PlayerContainer>
    )

}

VideoPlayer.Controls = Controls

export default VideoPlayer