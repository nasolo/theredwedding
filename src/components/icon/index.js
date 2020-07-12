import React from 'react'
import styled from 'styled-components'
import Box from '../../elements/Box'
import ICON from './icons'



const Properties = icon => {
        return(
            <>
                {icon.path && icon.path.map(path => <path d={path}></path>)}
                {icon.polygon && icon.polygon.map(points => <polygon points={points}></polygon>)}
                {icon.circle && icon.circle.map(circle => <circle {...circle}></circle>)}
             </>
    
        )
    }

const Icon = styled(Box).attrs(props =>({
    as: 'svg',
    className: `${props.className ? props.className : "icon"} ${props.icon}`,
    children: ICON[props.icon.toUpperCase()] !== undefined ? Properties(ICON[props.icon.toUpperCase()]) : Properties(ICON.WRONG),
    viewBox: ICON[props.icon.toUpperCase()] !== undefined ? ICON[props.icon.toUpperCase()].viewBox !== undefined ? ICON[props.icon.toUpperCase()].viewBox : "0 0 24 24" : ICON.WRONG.viewBox,
    onClick: props.onClick
    
}))`
    ${({rotate}) => rotate && {transform: `rotate(${rotate}deg)`}}
    cursor: pointer;

`

Icon.defaultProps={
    
    display: 'inline-block',
    fontStyle: 'normal',
  
    icon: "wrong"
    
}


export default Icon