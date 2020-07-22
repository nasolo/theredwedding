import React from 'react'
import Row from '../../../../elements/row'
import Col from '../../../../elements/col'
import Icon from '../../../icon'
import Duration from '../../duration'
import {Seek} from './style'
import allActions from '../../actions'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { bindActionCreators } from 'redux'
import config from '../../selectors'
import VideoPlayer from 'react-player'
import { useCycle, motion } from 'framer-motion'
import { opacity } from 'styled-system'


const { getPlayerConfig } = config




const Controls = ({playerRef}) => {
    
    let name = 'gallery'
    const dispatch = useDispatch()
    const [volumeHover, cycleVolume] = useCycle("0", "80%")
    const player = VideoPlayer
    const {
            duration, 
            played, 
            playing,
            muted,
            volume
        } = useSelector(state=>getPlayerConfig(state, name), shallowEqual)

    const {
        handleDuration,
        handleEnded,
        handleProgress,
        handlePause,
        handleDisablePIP,
        handleEnablePIP,
        handlePlay,
        load,
        handleVolumeChange,
        handleToggleMuted,
        handlePlayPause,
        handleSeekMouseDown,
        handleSeekChange,
        handleSeekMouseUp
      } = bindActionCreators(allActions, dispatch)

      console.log(volumeHover)

    return (
        <Row zIndex="2000">
            <Col>
                <Icon 
                    icon={`${playing ? "pause" : "rightChevron"}`} 
                    key={`${playing ? "play" : "pause"}"_btn"`} 
                    height="1rem" 
                    fill="white" 
                    onClick={(name) =>handlePlayPause(name)}/>
            </Col>
        <Col>
            <Duration seconds={duration * played}/>
        </Col>
        <Col>
            <Duration seconds={duration}/>
        </Col>
        <Col>
            <Seek 
                key="seekTo_Range"
                value={played}
                onMouseDown={()=>handleSeekMouseDown()}
                onChange={(e)=>handleSeekChange(e, name)}
                onMouseUp={(e)=>handleSeekMouseUp(e, player, name)}
                
                
            />
        </Col>

        <Col
            onMouseEnter={()=>cycleVolume()}
            onMouseLeave={()=>cycleVolume()}
        >
            <Icon 
                icon={`${muted ? "mute" : "volume"}`}
                height="1rem" 
                fill="white"
                key="volume_btn"
                onClick={()=>handleToggleMuted(name)}
            />
 
            <Seek
                as={motion.input}
                animate={{
                    width: volumeHover
                }}
                key="volume_handler"
                value={volume}
                min={0}
                max={1}
                onChange={(e)=>handleVolumeChange(e, name)}
                
            />
        

        </Col>

        <Col borderRight='1px dotted grey' borderLeft='1px dotted grey'>
            <Icon 
                icon="expand"  
                height="1rem" 
                fill="white"
                key="volume_btn"
            />
        
        </Col>
        <Col>
            <Icon 
                icon="tools"  
                height="1rem" 
                fill="white"
                key="volume_btn"
            />
        </Col>
        </Row>
    )
    

}

export default Controls