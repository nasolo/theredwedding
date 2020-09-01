
import styled, { css } from "styled-components"
import Col from "../../../../../elements/col"



const Column = styled(Col).attrs(props =>({
    className: `${props.active ? 'active' : 'in-active'}`
}))`


    
    padding: 0;
    height: 100%;
    margin: auto;

    &.chat {
        border-top-right-radius: .25rem;

        .person {
            fill: white;
            height: 1rem;
            display: inline-block;
            padding-right: .25rem;
        }
    }

    &.quote {
        border-top-left-radius: .25rem;
    }


    ${({active}) => css`
        background: ${active ? "#980000" : "#B80000"};
        box-shadow: ${active && "inset 0px -5px 5px 0px rgba(0,0,0,0.25)"};
    
    `}

`


export default Column