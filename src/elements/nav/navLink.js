import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Box from '../Box';
import classNames from '../../utils/classNames';
import { variant } from 'styled-system';

const bsPrefix = "nav-link"

const linkVariants = variant({
    scale: 'navLinks'
})


const AbstractNavLink = styled(Box).attrs(props =>({
    as: props.as || "a"
}))`

    font-weight: 700;
    
    text-transform: capitalize;
    color: ${({color}) => color || "white"};

    &:hover{
        color: white;
    }
    ${linkVariants};

`

const Link = React.forwardRef(
    ({
       className,
       disabled,
       href,
       to,
       eventKey,
       onSelect,
       variant = "lg",
       ...props
    }, ref) => {

        const component = to ? NavLink : "a"

        return (
        <AbstractNavLink
            {...props}
            variant = {variant}
            ref={ref}
            eventKey={eventKey}
            as={component}
            disabled={disabled}
            to={to}
            href={href}
            onSelect={onSelect}
            className={classNames(
                bsPrefix,
                className
            )}
        />
    )}
)


export default Link