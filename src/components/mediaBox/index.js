import React from 'react'
import Media from "./style/media";
import Heading from "../../elements/heading";
import Icon from '../icon';



const MediaBox = ({icon, heading, id, onClick, active, ...rest}) => {

const activeColor = active ? "white" : "rgba(253,253,253,.4)" 


    return (
        <Media key={id} onClick={() =>onClick(id)} {...rest}>
            <Icon icon={icon}  fill={activeColor}/>
            <Heading 
                as="h7" 
                text={heading} 
                color={activeColor}
                fontWeight="500"
                fontSize=".75rem"
                />
        </Media>
    )
}




export default MediaBox