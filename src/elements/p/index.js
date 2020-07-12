import styled from "styled-components";
import Box from "../Box";
import { variant } from 'styled-system'

const variants = variant({
    scale: 'paragraph'
})

const textColor = ({color, theme}) => ({
    color: color ? color : theme.colors.whites[0]
})

const P = styled(Box).attrs({
    as: 'p'
})`

${variants}


${textColor}

`

export default P