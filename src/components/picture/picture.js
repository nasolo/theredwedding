import React, {useEffect, useRef} from 'react'
import useDom from '../../utils/hooks/canUseDom'
import PropTypes from 'prop-types';
import Wrapper from './style/box'
import { nanoid } from '@reduxjs/toolkit'
import Image from './style/image'
import StyledPicture from './style/picture';

const Picture = props => {

   const imgContainer = useRef(null)
   const containerId = nanoid()

useEffect(() => {
        let picturefill
        // c.f. https://github.com/scottjehl/picturefill/pull/556
        try{
            picturefill = require("picturefill") // eslint-disable-line global-require
        } catch(x){
            return;
        }

        if(picturefill){
            picturefill() //browser
        }
       
    })


    const renderSources = () => {
        const isVersion = 
        useDom && document["documentMode"]
            ? document["documentMode"]
            : -1;
        const { sources } = props


        if(sources == null) {
            return null
        }

        const mappedSources = sources.map((source, index) =>{
            if(source.srcSet == null) {
                return null;
            }
            return (
                <source
                    key={`sources-${index}`}
                    srcSet={source.srcSet}
                    media={source.media}
                    type={source.type}
                />
            );
        })
           // IE9 requires the sources to be wrapped around an <audio> tag.
        if(isVersion === 9){
            return <video style={{display: "none"}}>{mappedSources}</video>
        }
        return mappedSources
    }

    const renderImage = () =>{
        const { 
            alt = "",
            src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            sizes,
            as,
            sources,
            key,
            id,
            ...rest
        } = props;

        const skipSizes = sources === undefined

        //Adds sizes props if sources isnt defined
        const sizesProp = skipSizes ? null : { sizes }
        
        return <Image alt={alt} srcSet={src} as={as} key={id} {...sizesProp} {...rest}/>
    }

    const {sources,color,ratio, as, id,  ...rest} = props

    return(
      <>
            {sources !== null 
            ? <StyledPicture as={as} key={id}>
                {renderSources()}
                {renderImage()}
            </StyledPicture> 
            : null}
         </>
    )

}


export default Picture

Picture.propTypes = {
    sources: {
        srcSet: PropTypes.string,
        media: PropTypes.string,
        type: PropTypes.string
    },
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    sizes: PropTypes.string
}