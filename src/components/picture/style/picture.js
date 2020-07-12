import styled from "styled-components"
import Box from "../../../elements/Box"
import {motion} from 'framer-motion'

const StyledPicture = styled(Box).attrs(props => ({
    as: props.as ? motion.picture : 'picture'
}))``


export default StyledPicture