import React, { useState } from 'react'
import { useRouteMatch } from "react-router-dom";
import VideoPlayer from '../../../../components/video'

const Video = ({data}) => {
    let match = useRouteMatch('/video')

    const [player, setPlayer] = useState(null)

    return (
        <VideoPlayer name={data.page} player={setPlayer} id={data.id} videoUrl={data.src} poster={data.poster}/>
    )
}

export default Video