import styled from "styled-components"
import Box from "../../../../../elements/Box"
import Col from 'react-bootstrap/Col'
import { left, variant } from "styled-system"


const PackageName = styled(Box).attrs(props =>({
    className: "h1 package-name",
    as: 'h1',
    children: props.name 
}))`

    font-weight: 900;
    
   

`


const PackagePrice = styled(Box).attrs(props => ({
    className: "h3 package-price",
    as: 'h3',
    children: `From ${props.price}`
}))``

const ViewMedia = styled(Box).attrs(props => ({
    as: 'button',
    className: 'btn viewmedia',
    children: props.text
}))`
    ${variant({
        scale: 'buttons'
    })}

    color: white;
    text-align: center;
    width: 80%;
    margin: 0;
    padding: 1rem 0;
   
   

`

const LeftPage = styled(Box).attrs(props => ({
    as: Col,
    lg: 3,
    sm: 12,
    className: "footerLeft"
}))`

    
    color: white;
    margin: auto 0;

`

LeftPage.name = PackageName
LeftPage.price = PackagePrice
LeftPage.view = ViewMedia



export default LeftPage