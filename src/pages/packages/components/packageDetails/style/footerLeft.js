import styled from "styled-components"
import Box from "../../../../../elements/Box"
import Col from 'react-bootstrap/Col'
import { variant } from "styled-system"
import css from '@styled-system/css'

const PackageName = styled(Box).attrs(props =>({
    className: "h1 package-name",
    as: 'h1',
    children: props.name 
}))`

    font-weight: 900;
    color: white;
   

`


const PackagePrice = styled(Box).attrs(props => ({
    className: "h3 package-price",
    as: 'h3',
    children: `From ${props.price}`
}))``


const ViewMediaMediaQuery = ({mediaQueries}) => css({
    [mediaQueries.lg]: {
        width: "80%"
    }
})

const ViewMedia = styled(Box).attrs(props => ({
 
    className: 'btn viewmedia',
    children: props.text
}))`
    ${variant({
        scale: 'buttons'
    })}

    ${({theme})=> ViewMediaMediaQuery(theme)}

    color: white;
    text-align: center;
    width: 100%;
    margin: .50rem auto 0;
    padding: 1rem 0;
    font-size: .75rem;
   
   

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