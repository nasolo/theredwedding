import React from 'react'
import Card from '../../../elements/card'
import ImgOverlay from '../style/cardImageOverlay'
import Container from '../../../elements/container'
import { motion } from 'framer-motion'




const SliderContent = ({id, url, title, header, subtitle, text}) =>{
       return (
        <Card as={motion.div} className="text-white rounded-0 h-100 justify-content-end flex-column" key={id} >
            <ImgOverlay src={url}/>
            <Card.Body flex={"0 0 auto"} marginBottom="3rem" maxWidth={["100%", "80%"]}>
                <Container>
                    <Card.Subtitle className="mb-2" text={header}/>
                    <Card.Title text={title}/>
                    <Card.Subtitle className="mt-2" text={subtitle}/>
                    <Card.Text className="mb-3 mt-3" text={text}/>
                </Container>
            </Card.Body>
        </Card>
        )    
}



export default SliderContent