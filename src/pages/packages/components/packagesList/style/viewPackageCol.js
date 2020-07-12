import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import Box from '../../../../../elements/Box'
import { motion } from 'framer-motion'




const ViewPackageLink = styled(Box).attrs(props =>({
    className: "view-package col-4",
    layoutId: props.id,
    as: motion.div
}))`

    margin: auto;
    max-width: 25%;
    max-height: 33%;
    background-color: white;
    background-image: ${({preview}) => preview ? `url(${preview})` : "none"};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    color: white;
    padding: 1rem;
    position: relative;
    z-index: 100;
    cursor: pointer;

    &::before{
        content: "";
        z-index: 1;
        position: absolute;
        top: 0;
        left:0;
        height: 100%;
        width: 100%;
        background-color: ${({theme})=> theme.colors.blacks[9]}
    }

    &:hover{

        &::before{
       
        background-color: ${({theme})=> theme.colors.blacks[1]}

    }
            background-color: white;
        }
    
`

 const motionProps ={
    
 }

export default ViewPackageLink

ViewPackageLink.defaultProps={
    ...motionProps
}