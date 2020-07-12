import React from 'react'
import styled from 'styled-components'
import Box from '../Box'
import classNames from '../../utils/classNames';

const  bsPrefix = 'navbar-text';



const Text = styled(Box).attrs(props =>({

    as: 'span'
    

}))`



`

const NavBarText = React.forwardRef(
    ({children, className, ...rest}, ref) => (
        <Text ref={ref} {...rest} className={classNames(
            bsPrefix,
            className
        )}>
            { children }
        </Text>
    )
)

export default NavBarText