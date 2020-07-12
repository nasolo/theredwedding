import React from 'react'
import styled from "styled-components";
import { motion } from 'framer-motion';
import Box from '../Box';
import classNames from '../../utils/classNames';


const AbstractNavItem = styled(Box).attrs(props => ({
    as: props.as || "li"
}))``


const bsPrefix = "nav-item"

const Item = React.forwardRef(
    ({className, children, ...rest}, ref) =>(
        <AbstractNavItem
            {...rest}
            ref={ref}
            className={classNames(
                className,
                bsPrefix
            )}
        >
            {children}
        </AbstractNavItem>
    )
)

export default Item