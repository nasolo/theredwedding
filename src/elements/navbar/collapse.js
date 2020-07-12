import React from 'react'
import styled from 'styled-components'
import Box from '../Box'
import classNames from '../../utils/classNames';

const  bsPrefix = 'navbar collapse navbar-collapse';



const Collapse = styled(Box).attrs(props =>({

}))``

const NavbarCollapse = React.forwardRef(
    ({children, className, ...props}, ref) => (
        <Collapse ref={ref} {...props} className={classNames(
            bsPrefix,
            className
        )}>
            { children }
        </Collapse>
    )
)

export default NavbarCollapse