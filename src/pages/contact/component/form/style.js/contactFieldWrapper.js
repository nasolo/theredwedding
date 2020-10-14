import styled, { css } from "styled-components";
import Box from "../../../../../elements/Box";


const borderMediaQueries = ({theme}) => css`

    ${`${theme.mediaQueries.lg}`}{
        border-radius: 0 !important;
        
        &:nth-child(1){
            border-top-left-radius: .25rem !important;
            border-bottom-left-radius: .25rem !important;
        }

        &:nth-last-child(1){
            border-top-right-radius: .25rem !important;
            border-bottom-right-radius: .25rem !important;
        }

        &:not(:last-child){
           border-right: 1px dotted grey;
        }


    }

`

const ContactFields = styled(Box).attrs(props =>({
className: " form-row contact-field-wrapper "
}))`

.form-group{
    background-color: white;
    ${borderMediaQueries}

    &:nth-child(odd){
        border-top-left-radius: .25rem;
        border-bottom-left-radius: .25rem;
        border-right: 1px dotted grey;
    }
    &:nth-child(even){
        border-top-right-radius: .25rem;
        border-bottom-right-radius: .25rem 
    }

}
    .form-control{
        background-color: transparent;
        border: none;
        height: 100%;
        min-height: 3rem;
        max-height: 5rem;
        
    }

    

`


export default ContactFields