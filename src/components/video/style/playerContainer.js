import styled from "styled-components"
import Box from "../../../elements/Box"

const PlayerContainer = styled(Box).attrs(props =>({
    className: "player-container"
}))`

    height: inherit;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    

`


export default PlayerContainer