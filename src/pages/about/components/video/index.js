import React from 'react'
import { useRouteMatch } from "react-router-dom";
import VideoPlayer from '../../../../components/video'

const Video = ({data}) => {
    let match = useRouteMatch('/video')

    console.log(data)
    
    return (
        <VideoPlayer name={data.page} id={data.id} videoUrl={data.src} poster={data.poster}/>
    )
}

export default Video