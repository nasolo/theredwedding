import  Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import React from 'react'
import { variant } from 'styled-system'
import ComposeBoxHelper from '../../utils/style/composeBox'

const variants = variant({
    scale: 'buttons',
})

const buttonProps = variant({
    prop: 'size',
    variants: {
        ["max-width"]: {
            width: "100%",
            padding: "1rem"
        }
    }
})


const Btn =({className, children, ...rest}) =>(
    <Button className={className} {...rest}>
        {children}
    </Button>
)

const Buttons = styled(Btn).attrs(props => ({

}))`
    

    ${variants}
    ${buttonProps}
    ${ComposeBoxHelper}

`


export default Buttons
