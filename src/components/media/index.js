import React from 'react'
import ReactPlayer from 'react-player'

import { IMAGE_EXTENSTIONS } from '../../utils/patterns'
import VideoPlayer from '../video'
import {FullsizePicture, Picture} from 'react-responsive-picture'


const handleDefault = e => e.preventDefault()


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

const Media = ({url, id, poster, fullscreen, ...rest}) => {
    
    const mediaPoster = poster && getPoster(poster)

    console.log(fullscreen)

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
                checkIfImage && <FullsizePicture src={url} cover="both"/>
            }
        
        if(url instanceof Array){

            let sources = url.map(url => ({
                    srcSet:  url
                })
            )
            
        return <FullsizePicture  cover="both" sources={sources} src={url[0]} className="position-absolute" onMouseDown={handleDefault}/> 
                            
        }
      }

    return (
        <>
            {renderSourceElement(url)}
        </>
    )

}

export default Media


//<FullScreenImage src={url} />