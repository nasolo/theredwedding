import  Card from '../../../../elements/card'
import Quote from '../../../../elements/blockquote'
import React, { useState } from 'react'
import Buttons from '../../../../elements/buttons'

import { useDispatch } from 'react-redux'
import Carousel from '../../../../modules/carousel'
import { Link } from 'react-router-dom'


const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };


const RenderQuote = ({quote, id, media, name, subTitle}) => {

  console.log(media)
  
  const mediaLink = location => ({
      ...location,
      pathname: '/gallery',
      hash: `media-${id}`,
      state: {
        media,
        id
      }
    })


  return(
        <>
            <Quote key={`quote-${id}`}>{quote}</Quote>
            <Card className="text-white border-0 text-center align-items-center" key={`quote-card-${id}`}>
                <Card.Body className="bg-transparent" key={`quote-body-${id}`}>
                    <Card.Title text={name} as="h3" className="mb-2 w-100" fontWeight="500"/>
                    <Card.Text text={subTitle}/>
                    <Buttons as={Link} to={mediaLink} variant="dotted" className="mt-3 mb-3">View Media</Buttons>
                </Card.Body>
            </Card>
        </>
  )
}


const Comments = ({quotes, getCarouselInfo, ...rest}) => {
    
    const handleCarouselData = (data) => getCarouselInfo(data)

    return (
      <Carousel getCarouselInfo={handleCarouselData}>
        {quotes.map((quote, index) => (
            <RenderQuote {...quote} key={`quote-${index}`}/>
        ))}
      </Carousel>
  
    )
}

export default Comments



/*
 <ViewModal show={modalShow} onHide={() => toggleModal()}>
                <Carousel data={media}>
                    {media !== undefined ? media.map((media, i) => (
                        <Img
                            as={motion.img}
                            srcSet={media} 
                            key={i} 
                            drag="x"
                            dragConstraints ={{left: 0, right: 0}}
                            onMouseDown={(e)=> e.preventDefault()}
                            dragElastic={1}
                        /> 
                    )): null}
                </Carousel>
            </ViewModal>
*/



/*<AnimatePresence custom={direction} exitBeforeEnter>
        <Drag
            custom={direction}
            key={`motion-drag-${id}`}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
            x: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 }
            }}
            variants={variants}
            onDragEnd={(event, info) => dispatch(handleOnDragEnd(event, info, setActiveQuoteId(next), setActiveQuoteId(prev)))}
        >
            <Quote>{quote}</Quote>
            <Card className="text-white border-0 text-center align-items-center ">
                <Card.Body className="bg-transparent">
                    <Card.Title text={name} as="h3" className="mb-2 w-100" fontWeight="500"/>
                    <Card.Text text={subTitle}/>
                    <Buttons variant="dotted" className="mt-3 mb-3">View Media</Buttons>
                </Card.Body>
            </Card>
        </Drag>
    </AnimatePresence>
  */