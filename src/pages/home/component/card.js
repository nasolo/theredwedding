import React from 'react'
import Card from '../../../elements/card'
import ImgOverlay from '../style/cardImageOverlay'
import Container from '../../../elements/container'
import { motion } from 'framer-motion'
import Frame from '../../../elements/Frame'

const transition={
    type: "spring", 
    stiffness: 300, 
    damping: 200,
    mass: 10,
    opacity: { 
       duration: 1 
   },
 }

const variants = {
    show:i => ({
        x: 0,
        opacity: 1,
        transition: {
            ...transition,
            delay: i * 0.5
        }
    }),
    hidden: i =>({
        x: -20,
        opacity: 0,
        transition: {
            ...transition,
           
        }
    })
}

const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.06, delayChildren: 1 } },
  }
    


const letterVariants = {
    before: {
      opacity: 0,
      x: -20,
      transition: {
          type: "spring",
          damping: 16,
          stiffness: 200,
          
      },
    },
    after: {
      opacity: 1,
      x: 0,
      transition: {
          type: "spring",
          damping: 16,
          stiffness: 200,
          
      },
    }    
  }


  const itemMotionConfig = {
    initial:"hidden",
    animate:"show",
    exit:"hidden",
    variants: variants
  }

 
const SliderContent = ({id, url, title, header, subtitle, text}) =>{


    const titleArr =  title && Array.from(title)

       return (
        <Card as={motion.div} className="text-white rounded-0 h-100 justify-content-end flex-column" key={id} >
            <ImgOverlay src={url}/>
            <Card.Body flex={"0 0 auto"} marginBottom="3rem" maxWidth={["100%", "100%", "80%"]}>
                <Container>
                    <Card.Subtitle
                        className="mb-2" 
                        text={header}
                        custom={1}
                        {...itemMotionConfig}
                        key={header}
                    />
                    <Frame
                        height="3rem"
                        display="flex"
                        justifyContent="start"
                        initial={ "before" }
                        animate={ "after" }
                        exit={ "before" }
                        variants={containerVariants}
                        key="card-title-container"
                    >
                    {titleArr ? titleArr.map((letter, index) =>(
                        <Frame
                            key={`letter-container-${index}`}
                            width="auto"
                            variants={ letterVariants }
                        >
                            <Card.Title 
                                text={letter === " " ? "\u00A0" : letter}
                                key={letter}
                            />
                        </Frame>
                        )): title}
                        
                    </Frame>
                    
                    <Card.Subtitle 
                        className="mt-2" 
                        text={subtitle} 
                        key={subtitle}
                        {...itemMotionConfig}
                        custom={3}
                    />
                    <Card.Text 
                        className="mb-3 mt-3"
                        text={text}
                        key={text}
                        {...itemMotionConfig}
                        custom={2.5}
                    />
                </Container>
            </Card.Body>
        </Card>
        )    
}



export default SliderContent