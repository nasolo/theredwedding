import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Box from '../Box';
import classNames from '../../utils/classNames';

const bsPrefix = "nav-link"

const AbstractNavLink = styled(Box).attrs(props =>({
    as: props.as || "a"
}))`

    font-weight: 700;
    font-size: 1rem;
    text-transform: capitalize;
    color: ${({color}) => color || "white"};

    &:hover{
        color: white;
    }


`

const Link = React.forwardRef(
    ({
       className,
       disabled,
       href,
       to,
       eventKey,
       onSelect,
       ...props
    }, ref) => {

        const component = to ? NavLink : "a"

        return (
        <AbstractNavLink
            {...props}
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