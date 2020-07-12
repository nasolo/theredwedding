import styled from "styled-components"
import Icon from "../../../components/icon"


const LeftChevron = styled(Icon)`
    position: absolute;
    height: 100%;
    max-height: 3rem;
    
    align-self: center;
    fill: ${({theme}) => theme.colors.greys[9]};
    left: 9%;
    z-index: 1;
`

const defaultIcon = () => ({
    icon: "leftChevron"
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

export default LeftChevron


LeftChevron.defaultProps = {
    ...defaultIcon(),
    ...mediaQueries
}