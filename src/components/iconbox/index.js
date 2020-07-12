import React from 'react'
import Icon from '../icon'
import P from '../../elements/p'

import Wrapper from './style/wrapper'



const IconBox = ({
                icon, 
                text,
                iconStyle,
                textStyle,
                wrapperStyle,
                onClick,
                active
                }) =>{

        return(
            <Wrapper onClick={onClick} {...wrapperStyle} active={active} className={`${active ? "active" : "in-active"}`}>
                {icon && 
                <Icon className={`${icon}-icon ${active ? "active" : "in-active"}`} {...iconStyle} icon={icon}/>}
                    <P {...textStyle} className={`${text}-text ${active ? "active" : "in-active"}`}> {text}</P>
            </Wrapper>
        )
}

export default IconBox


Icon.defaultProps ={
    height: "100%",
    m: "0"
}

P.defaultProps ={
    fontSize: ".75em",
    fontWeight: 500,
    mr: "0"

}

