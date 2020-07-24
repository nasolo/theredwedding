import React, { useRef, useEffect, useCallback} from 'react'
import Spinner from 'react-bootstrap/Spinner'
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

const Video = ({config, actions, poster, player}) => {

  const ref = useRef(null)

  useEffect(()=>{
    const { current } = ref
    return player(current)
  },[ref])

  const { id, url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = config
  const {handlePlay,  handleEnablePIP, handleDisablePIP, handlePause, handleEnded, handleProgress, handleDuration, handleVideoRef, handlePlayPause} = actions

return (
        <ReactPlayer
            className="react-player"
            key={id}
            wrapper={PlayerWrapper}
            ref={ref}
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
            onPlay={()=>handlePlay(id)}
            onEnablePIP={()=>handleEnablePIP(id)}
            onDisablePIP={()=>handleDisablePIP(id)}
            onPause={()=>handlePause(id)}
            onBuffer={()=> console.log('on buffer')}
            onSeek={(e)=>console.log('onSeek', e)}
            onEnded={()=>handleEnded(id)}
            onError={e => console.log('onError',e)}
            onProgress={(progress)=>handleProgress(id, progress)}
            onDuration={(duration)=>handleDuration(id, duration)}
            onClick={()=>handlePlayPause(id)}
        />
  )
}
 
const VideoPlayer = ({videoUrl, id, poster, player}) => {

    const dispatch = useDispatch()
    const actions = bindActionCreators(allActions, dispatch)

    useEffect(
      ()=>{
            shouldLoadVideo && actions.load(videoUrl, id)
            },[videoUrl, dispatch]
        )

    const playerConfig = useSelector(state=>getPlayerConfig(state, id), shallowEqual)
    
    
      
     const shouldLoadVideo = videoUrl !== undefined
     const shouldRenderVideo = playerConfig === undefined


    return (
      <PlayerContainer>
        {shouldRenderVideo ? 
        <Spinner animation="border" className="m-auto"/>  
        :
        <Video player={player} config={playerConfig} actions={actions} poster={poster}/>}
        
          {!poster &&
            <PlayButton
              //playing={playerConfig.playing}
              onClick={() =>actions.handlePlay(id)}
              poster={poster}
            />
          }
    
      </PlayerContainer>
    )

}

VideoPlayer.Controls = Controls

export default VideoPlayer

/* 
        */