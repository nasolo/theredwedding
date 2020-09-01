import styled, { css } from "styled-components"
import Box from "../Box"

const Input = styled(Box).attrs(props =>({
    as: props.as || 'input',
    className: 'form-control'
}))`

        display: block;
        width: 100%;
        
        padding: .375rem .75rem;
        font-size: .75rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

        ${props => css`
        
            border: ${ props.border || "1px solid #ced4da" };
            &&{
                height: ${props.height || "calc(1.5em + .75rem + 2px)"};
            }
        `
    }
    
`

export default Input