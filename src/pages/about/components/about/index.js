import React from 'react'
import FullScreenImage from '../../../../elements/imagePlaceholder'
import Row from '../../../../elements/row'
import Col from '../../../../elements/col'
import Heading from '../../../../elements/heading'
import Container from '../../../../elements/container'
import P from '../../../../elements/p'


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function findEnd(length, pos){
    let wordPerParagraph = getRandomInt(20, 25)
    return wordPerParagraph > length ? length : wordPerParagraph + pos

}

const split = (text)=>{

    if(text === undefined){
        return text
    }

    let pos = 0
    let fragments = []
    const words = text.split(' ')
    
    while (pos < words.length){
        let endPos = findEnd(words.length, pos)
        fragments.push(words.slice(pos, endPos).join(' '))
        pos = endPos + 1
    }

    return fragments

}



const About = ({data}) => {

    const parsedText = split(data.description)
    
    return (
        <FullScreenImage src={data.background} className="d-flex justify-content-center">
            <Container fluid className="h-100 m-auto">
                <Row>
                    <Col cols={12}>
                        <Heading 
                            as="h5" 
                            text={data.heading} 
                            className="p-3"
                            textAlign={{_:"center", lg: "right"}}

                        />
                    </Col>

                    {parsedText.map((text, i) =>(
                        <Col cols={12} lg={6} key={i}>
                            <P  variant="primary" 
                                marginLeft={{_:"15%", lg: "40%"}}
                                textAlign={{_:"left", lg: "right"}}
                            >
                            {text}
                            </P>
                        </Col>

                    ))}
                </Row>
            </Container>
        </FullScreenImage>
    )
}

export default About