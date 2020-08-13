
import styled from 'styled-components'
import css from '@styled-system/css'
import { NavLink } from "react-router-dom";
import Box from '../../../elements/Box';
import { variant } from 'styled-system'

const mediaQueries = ({theme}) => css({
    [theme.mediaQueries.xl]: {
        fontSize: "1rem",
        padding: "1rem 5vw"
    }
})

const Link = styled(Box).attrs(props => ({
    as: NavLink,
    className: `${props.text}`,
    children: props.text
}))`

    ${variant({
        scale: 'buttons'
    })}

    ${mediaQueries}
    padding: 1.5rem 5vw;
    z-index: 100;
    color: white;
    font-size: .75em;
    text-transform: uppercase;
    vertical-align: middle;

    &:not(:last-child) {
        margin-right: .50rem;
        
    }


    
`

export default Link