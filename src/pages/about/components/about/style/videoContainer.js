import styled from "styled-components"
import Box from "../../../../../elements/Box"

const VideoContainer = styled(Box).attrs(props =>({

    className: 'video-container'

}))`


overflow: hidden;
display: flex;
justify-content: flex-end;


`

export default VideoContainer