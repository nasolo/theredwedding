import React from 'react'
import { variant } from 'styled-system'
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
    className: `icon ${props.icon}`,
    children: ICON[props.icon.toUpperCase()] !== undefined ? Properties(ICON[props.icon.toUpperCase()]) : Properties(ICON.WRONG),
    viewBox: ICON[props.icon.toUpperCase()] !== undefined ? ICON[props.icon.toUpperCase()].viewBox !== undefined ? ICON[props.icon.toUpperCase()].viewBox : "0 0 24 24" : ICON.WRONG.viewBox,
    onClick: props.onClick
    
}))`

    ${variant({
        prop: 'size',
        variants: {
            small: {
                height: ".75rem",
            },
            medium: {
                height: "1rem",
            },
            large: {
                height: "2rem",
            }
        }
    })};

    ${({rotate}) => rotate && {transform: `rotate(${rotate}deg)`}}
    cursor: pointer;
    overflow: visible;



`

Icon.defaultProps={
    
    display: 'inline-block',
    fontStyle: 'normal',
    icon: "wrong"
    
}


export default Icon