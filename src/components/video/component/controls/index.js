import React, { useEffect } from 'react'

import Icon from '../../../icon'
import Duration from '../../duration'
import {Seek} from './style/seek'
import allActions from '../../actions'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { bindActionCreators } from 'redux'
import config from '../../selectors'

import { useCycle, motion } from 'framer-motion'
import ControlsWrapper from './style/videoControlsWrapper'
import LeftControls from './style/LeftControls'
import TimeDisplay from './style/timeDisplay'
import ProgressBarContainer from './style/progressBarContainer'
import RightControls from './style/rightControls'
import VolumeControls from './style/volumeControls'
import { volumeControlVariants, toolsVariants } from '../controls/style/variants'
import ToolsControls from './style/tools'
import { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'
import Popover from '../../../popover'



const { activeVideo } = config

const Controls = ({player}) => {

        
    const dispatch = useDispatch()
    const [expand, setExpand] = useCycle(false, true)
     
    
    const {
            duration, 
            played, 
            playing,
            muted,
            volume,
            fullscreen,
            quality,
            id
        } = useSelector(state=>activeVideo(state), shallowEqual)

    const {
        toggleFullscreen,
        handleVolumeChange,
        handleToggleMuted,
        handlePlayPause,
        handleSeekMouseDown,
        handleSeekChange,
        handleSeekMouseUp
      } = bindActionCreators(allActions, dispatch)

      useEffect(() => {
        toggleFullscreen(id, screenfull.isFullscreen)
      }, [screenfull.isFullscreen])


       return (
        <ControlsWrapper playing={playing}>
          
          <LeftControls>
                <Icon
                    icon={`${playing ? "pause" : "rightChevron"}`} 
                    key={`${playing ? "play" : "pause"}"_btn"`} 
                    height={[".75rem", "1rem"]}
                    fill="white" 
                    onClick={(id) =>handlePlayPause(id)}
                    margin="auto .50rem auto"
                    
                />
            <TimeDisplay>
                <Duration seconds={duration * played} className="mr-3"/>
                <Duration seconds={duration} />
            </TimeDisplay>
        </LeftControls>
            
        
        <ProgressBarContainer>
       
            <Seek 
                key="seekTo_Range"
                width="100%"
                margin="auto"
                value={played}
                onMouseDown={()=>handleSeekMouseDown(id)}
                onChange={(e)=>handleSeekChange(e, id)}
                onMouseUp={(e)=>handleSeekMouseUp(e, player, id)}
            />
            
        </ProgressBarContainer>
    
        <RightControls 
            as={motion.div}
            display="flex"
            onMouseLeave={() => expand === true && setExpand()}
        >
            
            <Icon 
                icon={`${muted ? "mute" : "volume"}`}
                padding="0 .50rem"
                margin="auto"
                height="1.5rem" 
                fill="white"
                key="volume_btn"
                display="inline-block"
                zIndex="1000"
                onMouseEnter={() => expand === false && setExpand()}
                onClick={()=>handleToggleMuted(id)}
            />    
            <VolumeControls
                as={motion.div}
                margin="auto"
                onHoverEnd={() => expand === true && setExpand()}
                variants={volumeControlVariants}
                initial="hidden"
                layout
                animate={`${expand ? 'visible' : 'hidden'}`}
            >
            <Seek
                    key="volume_handler"
                   margin="auto"
                    width="100%"
                    value={volume}
                    min={0}
                    max={1}
                    onChange={(e)=>handleVolumeChange(e, id)}
                />
        </VolumeControls>


<ToolsControls
        as={motion.div}
        variants={toolsVariants}
        layout
        initial="visible"
        animate={`${expand ? 'hidden' : 'visible'}`}
    >
        <Icon 
            icon="expand"
            height="1rem" 
            fill="white"
            key="fullscreen_btn"
            pr="1rem"
            onClick={() =>screenfull.request(findDOMNode(player))}
                
        />
        <Popover data="Select star to favorite images you love">
            <Icon 
                icon="tools"  
                height="1rem" 
                fill="white"
                key="volume_btn"
            />
            </Popover>
</ToolsControls>

    </RightControls>
    </ControlsWrapper>



    )
    

}

export default Controls