import styled from 'styled-components'
import Box from '../Box'
import Icon from '../../components/icon'
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from '../../elements/col'
import css from '@styled-system/css'

const mediaQueries = ({theme}) => css({
    [theme.mediaQueries.lg]:{
        fontSize: "calc(3vw)"
    }
})


const QuoteIcon = ({icon}) =>(
    <Col  cols={1} textAlign="center" margin="auto" padding="0">
        <Icon icon={icon} height="15vh" width="5vw" fill="white" className="m-sauto"/>
    </Col>
) 


const Block = ({className, children, ...rest}) => (
    <Row>
        <QuoteIcon icon="leftquote" {...rest}/>
            <Col  cols={10}  margin="auto">
                <blockquote className={className} {...rest}>
                    {children}
                </blockquote>
            </Col>
        <QuoteIcon icon="rightquote" {...rest}/>
    </Row>
)

 const Quote = styled(Box).attrs(props => ({
    as: Block
}))`
                                
    word-wrap: break-word;
    color: white;
    text-align: center;
    margin: 0;
    font-size: calc(3vw + 1vh);
    font-weight: 900;
    ${mediaQueries}
    
`




export default Quote