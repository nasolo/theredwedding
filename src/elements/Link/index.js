import styled from "styled-components";
import Box from "../Box";
import { variant } from 'styled-system'



 

const CardLink = styled(Box).attrs(props =>({
    as: Link,
    className: "Link",
    children: props.text
}))`
    

   
    
${variant({
    scale: 'buttons'
})}

`

export default CardLink