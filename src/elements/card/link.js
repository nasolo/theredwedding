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
    
    className: "card-link btn",
    as: props.to ? Link : 'a',
    children: props.text
}))`
    ${mediaQueries}
    margin: auto;
    width: ${props => props.width || '100%'} ;
    padding: 5% 1em;

${variant({
    scale: 'buttons'
})}

`

export default CardLink