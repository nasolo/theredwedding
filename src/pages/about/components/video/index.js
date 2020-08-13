import React, { useState } from 'react'
import { useRouteMatch } from "react-router-dom";
import Media from '../../../../components/media'
import VideoContainer from '../about/style/videoContainer';
import VideoPlayer from '../../../../components/video';
import VideoControlsWrapper from '../about/style/videoControlsWrapper';
import MediaContainer from '../about/style/mediaContainer';


const Controls = VideoPlayer.Controls

const Video = ({data}) => {

    const {id, page, route, src, poster} = data

    

    let match = useRouteMatch(route)
    const [player, setPlayer] = useState(null)
    

    console.log(data, src)

    return (
      <>
            <MediaContainer>
                <Media player={setPlayer} id={id} url={`../${src}`} poster={`${poster}`}/>
            </MediaContainer>
            <VideoControlsWrapper>
                <Controls player={player} zIndex="100" margin="auto"/>
            </VideoControlsWrapper>
        </>
    )
}

export default Video

