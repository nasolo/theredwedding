import styled from "styled-components"
import Icon from "../../../components/icon"


const RightChevron = styled(Icon)`
    position: absolute;
    height: 100%;
    max-height: 3rem;
    z-index: 1;
    align-self: center;
   
    fill: ${({theme}) => theme.colors.greys[9]};
    cursor: pointer;

    right: 9%;
`

const defaultIcon = () => ({
    icon: "rightchevron"
})

const handleDisplay = () => ({
    display:{
        _: "none",
        sm: "none",
        md: "none",
        lg: "none",
        xl: "inline"
    }
})


const mediaQueries = {
    ...handleDisplay()

}

export default RightChevron


RightChevron.defaultProps = {
    ...defaultIcon(),
    ...mediaQueries
}