import React from 'react'
import styled, {css} from 'styled-components'
import { variant } from 'styled-system'
import Box from '../Box'
import classNames  from '../../utils/classNames'
import PropTypes from 'prop-types'


const bsPrefix = "navbar"


const variants = variant({
    variants: {
        top: {
            position: "absolute",
            top: 0,
            zIndex: 99
        }
    }
})

const Navbarnav = styled(Box).attrs(props => ({
    as: "nav"
}))`

overflow: hidden;
width: 100%;
padding: 0;
${variants}

`

const Navbar = React.forwardRef((props, ref) =>{
    let {
        expand,
        children,
        className,
        ...rest
    } = props

    const shouldUpdateExpandClass = typeof expand === 'string'
    let expandClass = `${bsPrefix}-expand-${shouldUpdateExpandClass && expand}`

    
    return(
        <Navbarnav
            ref={ref}
            {...rest}
            className={classNames(
                bsPrefix,
                expand && expandClass,
                className
            )}
        >
            {children}
        </Navbarnav>
    )
})


Navbar.PropTypes = {
    expand: PropTypes.oneOf([true, 'sm', 'md', 'lg', 'xl']).isRequired,

}

export default Navbar