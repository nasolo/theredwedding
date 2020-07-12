import React from 'react'
import FullScreenImage from '../../../elements/imagePlaceholder'
import { IMAGE_EXTENSTIONS,  VIDEO_PLAYER_EXTENSIONS} from '../../../utils/patterns'
import VideoPlayer from '../../../components/video'


const validateExtension = exp =>{
   const expr = Object.values(VIDEO_PLAYER_EXTENSIONS)
   return expr.reduce((prev, next) => {     
        if(next.test(exp)){
            return prev = true
        }
        return prev
    }, false)
}

const canPlay = (url) =>{
    if(url instanceof Array){
        for(let item of url){
            if(typeof item === 'string' && validateExtension(url)){
                return true
            }
        }
    }

    if(typeof url === 'string'){
        return validateExtension(url)
    }

    return false
    
}



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



const ActiveMedia = ({media}) => {
    
    const poster = media.poster ? getPoster(media.poster) : false
    const { url, id } = media


    return (
        <>

            { isImage(url) && <FullScreenImage src={renderSourceElement(url)}/> }
            { canPlay(url) & poster.length > 0 ? <FullScreenImage src={renderSourceElement(poster)}/> : null }
            { canPlay(url) & poster <= 0 ?  <VideoPlayer name={"gallery"} id={id} videoUrl={renderSourceElement(url)}/> : null }

            
        </>
    )

}

export default ActiveMedia