import styled from "styled-components"
import Box from "../Box"
import Frame from "../Frame"

const Drag = styled(Box).attrs(props =>({
    as: Frame,
    className: `${props.clasName} drag`
}))`
   

`


Drag.defaultProps = {
    drag:"x",
    dragConstraints: {
        left: 0,
        right:0
    }
}

export default Drag