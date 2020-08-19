import React from 'react'
import Card from '../../../../elements/card'
import Icon from '../../../../components/icon'


const Service = ({icon, service, id, price, description}) =>{
    return(
        <Card 
            key={id} 
            className="text-center text-white"
            padding={{_:".50rem .75rem", lg:"1rem .75rem"}}
        >
            
            <Icon 
                icon={icon} 
                className="card-img-top text-center m-auto" 
                height={{_:"2rem", lg:"3rem"}}
                width="5rem" 
                fill="white"
            />

            <Card.Body className="bg-transparent">
                <Card.Title text={service}  as="h3" fontSize={{_: "1rem", xl:"2rem"}}/>
                    <Card.Text 
                        text={description}  
                        fontSize={".75rem"} 
                        pb={{_:".50rem", lg: "1rem"}} 
                        width={{_:"100%", lg:"60%"}}
                    />
                <Card.Subtitle 
                    text={`Starting at ${price}`} 
                    fontSize={".75rem"}
                />
            </Card.Body>
        </Card>
    )
}

export default Service