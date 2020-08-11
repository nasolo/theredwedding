import styled from "styled-components"
import Icon from "../../../../../components/icon"
import React from 'react'
import {Link} from 'react-router-dom'


const CloseBtn = styled(Icon).attrs(props =>({
    className: "closeIcon"
}))`

    z-index: 200;
    position: relative;
    max-height: 2.9rem;
    max-width: 2.9rem;
    cursor: pointer;
    position: absolute;
    top: 20%;
    right: 15%;
    fill: ${({theme}) => theme.colors.whites[0]};;
   
`





CloseBtn.defaultProps ={
    icon: "closesmall"
}


const Close = props => (
    <Link to="/packages">
        <CloseBtn {...props}/>
    </Link>
)

export default Close