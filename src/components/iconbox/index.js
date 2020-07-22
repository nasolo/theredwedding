import React from 'react'
import Icon from '../icon'
import P from '../../elements/p'
import PropTypes from 'prop-types'
import Wrapper from './style/wrapper'

const propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    iconStyle: PropTypes.object,
    textStyle: PropTypes.object,
    wrapperStyle: PropTypes.object
}

const IconBox = ({
                icon, 
                text,
                iconStyle,
                textStyle,
                wrapperStyle,
                onClick,
                active
                })=>(
            <Wrapper onClick={onClick} {...wrapperStyle} active={active} className={`${active ? "active" : "in-active"}`}>
                {icon && 
                <Icon 
                    className={`${icon}-icon ${active ? "active" : "in-active"}`} 
                    {...iconStyle} 
                    icon={icon}
                />}

                    <P 
                        {...textStyle} 
                        className={`${text}-text 
                        ${active ? "active" : "in-active"}`}
                    > 
                        {text}
                    </P>

            </Wrapper>
        )


export default IconBox


IconBox.prototype = propTypes
