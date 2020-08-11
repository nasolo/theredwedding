import styled from "styled-components"
import Box from "../Box"
import Frame from "../Frame"

const Drag = styled(Box).attrs(props =>({
    as: Frame,
    drag:"x",
    dragConstraints: {
        left: 0,
        right:0
    },
    className: `${props.clasName} drag`
}))`
   

`



export default Drag