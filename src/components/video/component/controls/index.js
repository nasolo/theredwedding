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
import { FormName } from 'redux-form'

const { getPlayerConfig } = config




const Controls = ({playerRef}) => {
    
    let name = 'gallery'
    const dispatch = useDispatch()
    const player = VideoPlayer
    const {
            duration, 
            played, 
            playing,
            muted
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
                value={played}
                onMouseDown={()=>handleSeekMouseDown()}
                onChange={(e)=>handleSeekChange(e, name)}
                onMouseUp={(e)=>handleSeekMouseUp(e, player, name)}
            />
        </Col>

        <Col
            
            borderLeft='1px dotted grey'
        
        >
            <Icon 
                icon={`${muted ? "mute" : "volume"}`}
                height="1rem" 
                fill="white"
                key="volume_btn"
                onClick={()=>handleToggleMuted(name)}
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