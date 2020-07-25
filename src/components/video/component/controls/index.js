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

import { useCycle, motion } from 'framer-motion'



const { activeVideo } = config




const Controls = ({player, id}) => {

    console.log(id)
    
    const dispatch = useDispatch()
    const [volumeHover, cycleVolume] = useCycle("0", "80%")
    
    const {
            duration, 
            played, 
            playing,
            muted,
            volume
        } = useSelector(state=>activeVideo(state), shallowEqual)
console.log(played)
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

     return (
        <Row zIndex="2000">
            <Col>
                <Icon 
                    icon={`${playing ? "pause" : "rightChevron"}`} 
                    key={`${playing ? "play" : "pause"}"_btn"`} 
                    height="1rem" 
                    fill="white" 
                    onClick={(id) =>handlePlayPause(id)}/>
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
                onMouseDown={()=>handleSeekMouseDown(id)}
                onChange={(e)=>handleSeekChange(e, id)}
                onMouseUp={(e)=>handleSeekMouseUp(e, player, id)}
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
                onClick={()=>handleToggleMuted(id)}
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
                onChange={(e)=>handleVolumeChange(e, id)}
                
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