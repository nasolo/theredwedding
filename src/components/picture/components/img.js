import React, { useEffect, useState, useRef } from 'react'
import Thumbnail from '../style/thumbnail'
import Image from '../style/image'


const Img = props => {

const [img, setImg] = useState({
 
    startLoad: false,
    thumbnail:{
        loaded: false
    },
    image: {
        loaded: false
    }
})

const onLoadThumbnail = () => {
    const {thumbnail: thumbState} = img
    
    setImg({
        ...img,
        thumbnail: {
            ...thumbState,
            loaded: true
        }
    })
}

const onLoadImage = () =>{
    const { image: imgState } = img;

    setImg({
        ...img,
      image: {
        ...imgState,
        loaded: true,
      }
    })
}


const renderThumbnail = () => {
    const { thumbnail: src, blur, alt, ...rest } = props
    const { loaded } = img.thumbnail

    console.log(src)

    return (
        <Thumbnail
            {...rest}
            onLoad={onLoadThumbnail}
            alt={alt}
            loaded={loaded}
            blur={blur}
            src={src}
        />
    )
    
}

const rederImage = () => {
    const { loaded: thumbLoaded } = img.thumbnail
    if(!thumbLoaded) return;

    const {src, alt, ...rest} = props
    const { loaded } = img.image

    return (
        <Image
            {...rest}
            alt={alt}
            src={src}
            onLoad={onLoadImage}
            loaded={loaded}
            
        />
    )
}


return (
    <>
        {renderThumbnail()}
        {rederImage()}
   </>

)


}

export default Img

Img.defaultProps = {
    blur: 20,
    alt: '',
    thumbnail: "/assets/images/placeholder/woman-putting-wedding-ring-on-groom-s-finger-2253838.jpg"
  };