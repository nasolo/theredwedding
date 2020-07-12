import Img from '../img'
import styled from 'styled-components'
import Box from '../Box'



const handleCardImg = variant => {
    switch (variant) {
        case "top":
            return "card-img-top"
        default:
            return "card-img"
    }
}



const CardImg = styled(Box).attrs(props =>({
    className: handleCardImg(props.variant),
    src: props.src,
    alt: "card image",
    as: 'img'
}))`

    &:before{
        content: '';
        box-shadow: 5px 10px black;
    }

`

export default CardImg