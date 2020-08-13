import React from 'react'
import ReactPlayer from 'react-player'
import FullScreenImage from '../../elements/imagePlaceholder'
import { IMAGE_EXTENSTIONS } from '../../utils/patterns'
import VideoPlayer from '../video'





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

const Media = ({url, id, poster,  ...rest}) => {
    
    const mediaPoster = poster && getPoster(poster)

    console.log(url)

    const renderSourceElement = (url) => {

        const checkIfCanPlay = ReactPlayer.canPlay(url)
        const checkIfImage = isImage(url)
        
        if (typeof url === 'string') {
          return checkIfCanPlay ? 
                <VideoPlayer 
                    {...rest}
                    id={id} 
                    poster={mediaPoster} 
                    videoUrl={url}
                />
                :
                checkIfImage && <FullScreenImage src={url} />
            }
        
        if(url instanceof Array){
            return renderSourceElement(url[0])
        }
      }

    return (
        <>
            {renderSourceElement(url)}
        </>
    )

}

export default Media