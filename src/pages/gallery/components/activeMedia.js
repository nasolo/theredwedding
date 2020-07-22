import React from 'react'
import ReactPlayer from 'react-player'
import FullScreenImage from '../../../elements/imagePlaceholder'
import { IMAGE_EXTENSTIONS } from '../../../utils/patterns'
import VideoPlayer from '../../../components/video'


const getPoster = poster => {
    
    if(!poster || poster.length < 1){
        return false
    }

    if(poster instanceof Array){
        return poster[0]
    }

    if(typeof poster === 'string'){
        return poster
    }

    return false

}

const isImage = url => {
    if(url instanceof Array){
        for(let item of url){
            if(typeof item === 'string'){
                return isImage(item)
            }
        }
    }

    if(typeof url === 'string'){
        return IMAGE_EXTENSTIONS.test(url)
    }
}


const renderSourceElement = (url) => {
    if (typeof url === 'string') {
      return url
    }
    if(url instanceof Array){
        return url[0]
    }
    
  }



const ActiveMedia = ({media, playerRef}) => {
    
    const poster = media.poster ? getPoster(media.poster) : false
    const { url, id } = media

    const checkIfCanPlay = ReactPlayer.canPlay(url)
    const checkIfImage = isImage(url)


    return (
        <>

            { checkIfImage && <FullScreenImage src={renderSourceElement(url)}/> }
            { checkIfCanPlay && <VideoPlayer playerRef={playerRef} name={"gallery"} id={id} poster={poster} videoUrl={renderSourceElement(url)}/>}

        </>
    )

}

export default ActiveMedia