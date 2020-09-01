import styled from "styled-components";
import css from '@styled-system/css'
import Box from "../../../elements/Box";

const bgWhiteSmall = ({theme}) => css({
    [theme.mediaQueries.lg]: {
        background: "linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(186,186,185,1) 100%)"
    }
})

const borderRadiusBreakPoints = ({theme}) => css({
    [theme.mediaQueries.lg]: {
        borderRadius: ".5rem",
        minHeight: "2.5rem"
    }
})


const ButtonWrapper = styled(Box).attrs(props =>({
    className: 'button-wrapper'
}))`

    background: linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(186,186,185,1) 100%);
    border-radius: 0;
    min-height: 4rem;
    padding: .75rem 0 .75rem 1rem;
    
    
    

&:hover{
    background: #a7a7a7;
    cursor: pointer;
}

&.bg-sm-white{
    background: white;
    ${bgWhiteSmall}
}

${borderRadiusBreakPoints}

`

export default ButtonWrapper