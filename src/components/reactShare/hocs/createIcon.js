import React from 'react'
import { PropTypes } from 'prop-types';
import Icon from '../../icon/index';


const CreateIcon = React.forwardRef(
    ({
    icon,
    color = "black",
    className,
    size = "large",
    ...rest
    }, ref) => (
        <Icon 
            icon={icon}
            fill={color}
            size={size}
            className={className}
            ref={ref}
            {...rest}
        />
    )
)

CreateIcon.propTypes = {
    icon: PropTypes.string.required,
    color: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.oneOf(['large', 'medium', 'small']) 
}

export default CreateIcon