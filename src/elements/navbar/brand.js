import React from 'react'
import styled from 'styled-components'
import Box from '../Box'
import classNames from '../../utils/classNames'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const propTypes = {
    /** @default 'navbar' */
    bsPrefix: PropTypes.string,
  
    /**
     * An href, when provided the Brand will render as an `<a>` element (unless `as` is provided).
     */
    href: PropTypes.string,
  
    /**
     * Set a custom element for this component.
     */
    as: PropTypes.elementType,
  };
  

const bsPrefix = "navbar-brand"

const Brand = styled(Box).attrs(props =>({

}))`




`

const NavBarBrand = React.forwardRef(
    ({className, as, ...props}, ref) =>{

        const Component = as || (props.href ? 'a' : props.to && Link)

        return (
           
            <Brand
                as={Component}
                ref={ref}
                {...props}
                className={classNames(
                className,
                bsPrefix
                )}
            />

        )
    }
)


NavBarBrand.propTypes = propTypes
NavBarBrand.displayName = 'NavbarBrand';

export default NavBarBrand