import styled from "styled-components";
import Box from "../Box";
import { variant } from 'styled-system'
import css from '@styled-system/css'
import { Link } from "react-router-dom";

  const mediaQueries = ({theme}) => css({
    [theme.mediaQueries.xl]: {
        fontSize: ".75em"
    }
})


const CardLink = styled(Box).attrs(props =>({
    as: Link,
    className: "Link",
    children: props.text
}))`
    ${mediaQueries}
    align-self: flex-end;
    margin: auto 1rem;
   
    
${variant({
    scale: 'buttons'
})}

`

export default CardLink